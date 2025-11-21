import { NextResponse } from 'next/server';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');


const key = process.env.API_KEY

const response = await fetch(
          `https://api.calorieninjas.com/v1/nutrition?query=${encodeURIComponent(query)}`,
          {
            headers: {
              "X-Api-Key": key,
            },
          });

          if (!response.ok) {
            return NextResponse.json(
              { error: "Failed to fetch data"},
              { status: 500}
            );
          }
          const data = await response.json();
          return NextResponse.json(data);
        }