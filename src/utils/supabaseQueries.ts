import type { QueryData } from '@supabase/supabase-js';

export const someQuery = () => {};
export type SomeQuery = QueryData<ReturnType<typeof someQuery>>;
