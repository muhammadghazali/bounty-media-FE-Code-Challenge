interface MetaData {
  title: string;
  longDesc: string;
  desc: string;
  featured: boolean;
  categories: string[];
}

interface AccountDetails {
  transactionDate: Date;
  description: string;
  category: string;
  debit: number;
  credit: number;
  id: number;
}

interface BankStatements {
  metaData: MetaData[];
  accounts: AccountDetails[];
}

export type { MetaData, AccountDetails, BankStatements };
