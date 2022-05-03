import { FC, useState, useEffect, createContext, PropsWithChildren, useContext } from 'react';

export interface Transaction {
  id: string;
  from: Account;
  to: Account;
  amount: number;
  date: Date;
}

export interface Account {
  id: string;
  name: string;
  initialBalance: number;
  balance: number,
  transactions: Transaction[];
}

const DEFAULT_MODEL: Model = {
  accounts: [
    {
      id: '1',
      name: 'John Doe',
      initialBalance: 1000,
      balance: 1000,
      transactions: [],
    },
    {
      id: '2',
      name: 'Marty McFly',
      initialBalance: 1000,
      balance: 1000,
      transactions: [],
    },
    {
      id: '3',
      name: 'Dr. Emmett Brown',
      initialBalance: 1000,
      balance: 1000,
      transactions: [],
    },
  ],
  transactions: []
};

interface Model {
  accounts: Account[];
  transactions: Transaction[];
}

const serializeModel = (model: Model): string => {
  const accounts = model.accounts.map((it) => ({
    id: it.id,
    name: it.name,
    initialBalance: it.initialBalance,
  }));
  const transactions = model.transactions.map((it) => ({
    id: it.id,
    amount: it.amount,
    date: it.date.toISOString(),
    from: it.from.id,
    to: it.to.id,
  }));

  return JSON.stringify({ accounts, transactions });
};

const derializeModel = (payload: string): Model => {
  const data = JSON.parse(payload);

  const accounts: Account[] = data.accounts.map((it: any) => ({
    id: it.id,
    name: it.name,
    initialBalance: it.initialBalance,
    transactions: [],
  }));

  const transactions: Transaction[] = data.transactions.map((it: any) => ({
    id: it.id,
    amount: it.amount,
    date: new Date(it.date),
    from: accounts.find((account: any) => account.id === it.from),
    to: accounts.find((account: any) => account.id === it.to),
  }));

  accounts.forEach((account) => {
    account.transactions = transactions.filter((tx) => tx.from === account || tx.to === account);
    console.log(account);
    account.balance = account.initialBalance + account.transactions.reduce((prev, transaction) => {
      if (transaction.from === account) {
        return prev - transaction.amount;
      } 
      return prev + transaction.amount;
    }, 0);
  });

  return { accounts, transactions };
};

interface ModelContext {
  accounts: {
    items: Account[];
    create: (name: string) => void;
  };
  transactions: {
    items: Transaction[];
    create: (from: Account, to: Account, amount: number) => void;
  };
}

export const Context = createContext<ModelContext>(null as never);

export const ModelProvider: FC<PropsWithChildren<{}>> = ({ children }) => {
  const [model, setModel]= useState<Model>(() => {
    const data = localStorage.getItem('data');
    if (data) {
      return derializeModel(data);
    }
    return DEFAULT_MODEL;
  });

  useEffect(() => {
    localStorage.setItem('data', serializeModel(model));
  }, [model]);

  const createAccount = (name: string) => {
    setModel({
      ...model,
      accounts: [
        ...model.accounts,
        {
          id: Date.now().toString(),
          name,
          transactions: [],
          balance: 0,
          initialBalance: 0,
        },
      ],
    });
  };

  const createTransaction = (from: Account, to: Account, amount: number) => {
    const transaction = {
      id: Date.now().toString(),
      from,
      to,
      amount,
      date: new Date(),
    };

    from.balance -= amount;
    to.balance += amount;

    setModel({
      ...model,
      transactions: [
        ...model.transactions,
        transaction,
      ],
    });
  };

  return (
    <Context.Provider
      value={{
        accounts: {
          items: model.accounts,
          create: createAccount,
        },
        transactions: {
          items: model.transactions,
          create: createTransaction,
        },
      }}
    >
      {children}
    </Context.Provider>
  );

};

export const useModel = () => useContext(Context);
