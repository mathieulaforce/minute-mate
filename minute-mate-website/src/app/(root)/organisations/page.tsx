import { sql } from "@vercel/postgres";

const Organisations: React.FC = async () => { 
  const { rows } = await sql`SELECT * from Organisation`;

  return <div>
      {rows.map((row) => (
        <div key={row.id}>
          {row.name} 
        </div>
      ))}
    </div>
  };
  
  export default Organisations;
  