import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET() {
    try {
        const response = await axios.get('http://quotes.rest/qod', {
            headers: {
                'Authorization': 'Bearer pXBxk6rEzePNDvnFp2IcJyJUdXZanTWMtnyVeSez1237501a',
            }
        });
        const quote = response.data.contents.quotes[0];
        return NextResponse.json({ quote });
    } catch (error) {
        console.error('Error fetching the quote:', error);
        return NextResponse.json({ error: 'Failed to fetch the quote' }, { status: 500 });
    }
}