// Veritasor Backend: Delivery Receipts Cursor Pagination Helper (Issue #1211)
export interface PaginationParams {
  cursor?: string;
  limit: number;
}

export interface PaginatedResult<T> {
  items: T[];
  nextCursor: string | null;
  hasMore: boolean;
}

export function parseCursor(cursor?: string): { timestamp: number; id: string } | null {
  if (!cursor) return null;
  try {
    const raw = Buffer.from(cursor, 'base64').toString('utf-8');
    const [ts, id] = raw.split(':');
    return { timestamp: parseInt(ts, 10), id };
  } catch {
    return null;
  }
}
