const SUPABASE_URL = 'https://lhixzrddoxjuopcfxktc.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxoaXh6cmRkb3hqdW9wY2Z4a3RjIiwicm9sZSI6ImFub24iLCJpYXQiOjE2Njg1MzI1NzEsImV4cCI6MTk4NDEwODU3MX0.KCLMkbP0v3R7Sezg-l_Ftnr7VTfJ825RIEA5pPyAUok';

const client = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

export async function getAllCharacters() {
    const response = await client
        .from('characters')
        .select();

    return response.data;
}

export async function getCharacter(id) {
    const response = await client
        .from('characters')
        .select()
        .match({ id: id })
        .single();
    return response.data;
}