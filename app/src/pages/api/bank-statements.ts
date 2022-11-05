import type { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import { promises as fs } from 'fs';
import { BankStatements } from 'src/interfaces';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<BankStatements>
) {
  const jsonDirectory = path.join(process.cwd(), 'data');
  const bankStatements = await fs.readFile(
    jsonDirectory + '/bank-statements.json',
    'utf8'
  );
  return res.status(200).json(JSON.parse(bankStatements));
}
