import { writeFileSync } from "fs";
import { generateKeyPairSync } from "crypto";
import selfsigned from "selfsigned";

// Generate a private key and self-signed certificate
const attrs = [{ name: "commonName", value: "localhost" }];
const pems = selfsigned.generate(attrs, { days: 365 });

writeFileSync("key.pem", pems.private);
writeFileSync("cert.pem", pems.cert);

console.log("✅ Generated key.pem and cert.pem");
