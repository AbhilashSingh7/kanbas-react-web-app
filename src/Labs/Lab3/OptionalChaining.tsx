// src/Labs/Lab3/OptionalChaining.tsx

export default function OptionalChaining() {
    const user = {
      name: "Alice",
      address: {
        city: "Boston",
        zip: "02115",
      },
    };
  
    const userWithoutAddress: {
      name: string;
      address?: {
        city: string;
        zip: string;
      };
    } = {
      name: "Bob",
    };
  
    return (
      <div>
        <h3>Optional Chaining (?.)</h3>
        <p><strong>Alice's City:</strong> {user.address?.city}</p>
        <p><strong>Bob's City:</strong> {userWithoutAddress.address?.city ?? "N/A"}</p>
      </div>
    );
  }