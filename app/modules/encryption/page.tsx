"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { DashboardHeader } from "@/components/dashboard-header"
import { DashboardShell } from "@/components/dashboard-shell"
import { ArrowLeft, ArrowRight, Lock, Unlock } from "lucide-react"

export default function EncryptionPage() {
  const [plaintext, setPlaintext] = useState("")
  const [ciphertext, setCiphertext] = useState("")
  const [key, setKey] = useState("")

  const simulateEncryption = () => {
    // This is a simplified simulation - in a real app, you'd use actual encryption libraries
    if (!plaintext) return

    // Simple Caesar cipher for demonstration
    const shift = key ? key.charCodeAt(0) % 26 : 3
    const encrypted = plaintext
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0)
          const isUpperCase = code >= 65 && code <= 90
          const base = isUpperCase ? 65 : 97
          return String.fromCharCode(((code - base + shift) % 26) + base)
        }
        return char
      })
      .join("")

    setCiphertext(encrypted)
  }

  const simulateDecryption = () => {
    if (!ciphertext) return

    // Simple Caesar cipher decryption
    const shift = key ? key.charCodeAt(0) % 26 : 3
    const decrypted = ciphertext
      .split("")
      .map((char) => {
        if (char.match(/[a-z]/i)) {
          const code = char.charCodeAt(0)
          const isUpperCase = code >= 65 && code <= 90
          const base = isUpperCase ? 65 : 97
          return String.fromCharCode(((code - base - shift + 26) % 26) + base)
        }
        return char
      })
      .join("")

    setPlaintext(decrypted)
  }

  return (
    <DashboardShell>
      <div className="flex items-center">
        <Button variant="ghost" size="sm" asChild className="mr-2">
          <Link href="/dashboard">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Link>
        </Button>
      </div>

      <DashboardHeader heading="Encryption Module" text="Learn about data protection through encryption techniques">
        <Badge variant="outline" className="ml-2">
          60% Complete
        </Badge>
      </DashboardHeader>

      <Tabs defaultValue="simulator" className="space-y-4">
        <TabsList>
          <TabsTrigger value="simulator">Encryption Simulator</TabsTrigger>
          <TabsTrigger value="symmetric">Symmetric Encryption</TabsTrigger>
          <TabsTrigger value="asymmetric">Asymmetric Encryption</TabsTrigger>
          <TabsTrigger value="key-management">Key Management</TabsTrigger>
        </TabsList>

        <TabsContent value="simulator" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Encryption Simulator</CardTitle>
              <CardDescription>Experiment with encryption and decryption in a visual interface</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="plaintext">Plaintext</Label>
                    <Textarea
                      id="plaintext"
                      placeholder="Enter text to encrypt"
                      className="min-h-[120px]"
                      value={plaintext}
                      onChange={(e) => setPlaintext(e.target.value)}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="encryption-key">Encryption Key</Label>
                    <Input
                      id="encryption-key"
                      placeholder="Enter key (optional)"
                      value={key}
                      onChange={(e) => setKey(e.target.value)}
                    />
                    <p className="text-xs text-muted-foreground">
                      For demonstration, the first character of the key determines the shift amount
                    </p>
                  </div>

                  <div className="flex justify-between">
                    <Button variant="outline" onClick={simulateDecryption}>
                      <Unlock className="mr-2 h-4 w-4" />
                      Decrypt
                    </Button>
                    <Button onClick={simulateEncryption}>
                      <Lock className="mr-2 h-4 w-4" />
                      Encrypt
                    </Button>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="ciphertext">Ciphertext</Label>
                    <Textarea
                      id="ciphertext"
                      placeholder="Encrypted text will appear here"
                      className="min-h-[120px]"
                      value={ciphertext}
                      onChange={(e) => setCiphertext(e.target.value)}
                    />
                  </div>

                  <div className="rounded-md bg-muted p-4">
                    <h3 className="mb-2 text-sm font-medium">Encryption Process</h3>
                    <div className="flex items-center justify-center space-x-2">
                      <div className="rounded-md border p-2 text-center">
                        <p className="text-xs text-muted-foreground">Plaintext</p>
                        <p className="font-medium">Hello</p>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                      <div className="rounded-md border p-2 text-center">
                        <p className="text-xs text-muted-foreground">Algorithm</p>
                        <p className="font-medium">Caesar</p>
                      </div>
                      <ArrowRight className="h-4 w-4" />
                      <div className="rounded-md border p-2 text-center">
                        <p className="text-xs text-muted-foreground">Ciphertext</p>
                        <p className="font-medium">Khoor</p>
                      </div>
                    </div>
                    <p className="mt-2 text-xs text-muted-foreground text-center">
                      Note: This is a simple Caesar cipher for demonstration. Real encryption uses much more complex
                      algorithms.
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="symmetric" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Symmetric Encryption</CardTitle>
              <CardDescription>Using the same key for encryption and decryption</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-medium">How It Works</h3>
                  <div className="rounded-md bg-muted p-4">
                    <ol className="list-decimal pl-5 text-sm">
                      <li>Both parties agree on a shared secret key</li>
                      <li>Sender encrypts data using the key</li>
                      <li>Recipient decrypts data using the same key</li>
                    </ol>
                  </div>

                  <h3 className="mb-2 mt-4 text-lg font-medium">Common Algorithms</h3>
                  <div className="space-y-2">
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">AES (Advanced Encryption Standard)</h4>
                      <p className="text-sm text-muted-foreground">
                        Block cipher with key sizes of 128, 192, or 256 bits
                      </p>
                    </div>
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">DES (Data Encryption Standard)</h4>
                      <p className="text-sm text-muted-foreground">
                        Older block cipher with 56-bit key (now considered insecure)
                      </p>
                    </div>
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">ChaCha20</h4>
                      <p className="text-sm text-muted-foreground">
                        Stream cipher often used with Poly1305 authenticator
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Advantages</h3>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Fast and efficient for large data sets</li>
                    <li>Relatively simple implementation</li>
                    <li>Lower computational overhead</li>
                  </ul>

                  <h3 className="mb-2 mt-4 text-lg font-medium">Disadvantages</h3>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Key distribution problem - how to securely share the key?</li>
                    <li>Scales poorly with many users (n² key problem)</li>
                    <li>If the key is compromised, all encrypted data is vulnerable</li>
                  </ul>

                  <h3 className="mb-2 mt-4 text-lg font-medium">Use Cases</h3>
                  <ul className="list-disc pl-5 text-sm">
                    <li>File encryption</li>
                    <li>Database encryption</li>
                    <li>Secure communication channels (after key exchange)</li>
                    <li>Disk encryption</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="asymmetric" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Asymmetric Encryption</CardTitle>
              <CardDescription>Using different keys for encryption and decryption</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-medium">How It Works</h3>
                  <div className="rounded-md bg-muted p-4">
                    <ol className="list-decimal pl-5 text-sm">
                      <li>Each party generates a key pair: public and private keys</li>
                      <li>Public keys are shared openly</li>
                      <li>Sender encrypts with recipient's public key</li>
                      <li>Recipient decrypts with their own private key</li>
                    </ol>
                  </div>

                  <h3 className="mb-2 mt-4 text-lg font-medium">Common Algorithms</h3>
                  <div className="space-y-2">
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">RSA (Rivest-Shamir-Adleman)</h4>
                      <p className="text-sm text-muted-foreground">
                        Based on the difficulty of factoring large prime numbers
                      </p>
                    </div>
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">ECC (Elliptic Curve Cryptography)</h4>
                      <p className="text-sm text-muted-foreground">
                        Based on algebraic structure of elliptic curves over finite fields
                      </p>
                    </div>
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">Diffie-Hellman</h4>
                      <p className="text-sm text-muted-foreground">Method for securely exchanging cryptographic keys</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Advantages</h3>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Solves the key distribution problem</li>
                    <li>Provides authentication and non-repudiation</li>
                    <li>Enables secure communication without prior shared secrets</li>
                  </ul>

                  <h3 className="mb-2 mt-4 text-lg font-medium">Disadvantages</h3>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Significantly slower than symmetric encryption</li>
                    <li>Requires more computational resources</li>
                    <li>Key sizes are typically larger</li>
                  </ul>

                  <h3 className="mb-2 mt-4 text-lg font-medium">Use Cases</h3>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Digital signatures</li>
                    <li>Key exchange for symmetric encryption</li>
                    <li>Secure email (PGP/GPG)</li>
                    <li>SSL/TLS for secure web browsing</li>
                    <li>Cryptocurrency transactions</li>
                  </ul>
                </div>
              </div>

              <div className="rounded-md border p-4">
                <h3 className="mb-2 text-lg font-medium">Hybrid Encryption</h3>
                <p className="text-sm">
                  Most real-world systems use a combination of asymmetric and symmetric encryption:
                </p>
                <ol className="list-decimal pl-5 pt-2 text-sm">
                  <li>Use asymmetric encryption to securely exchange a symmetric key</li>
                  <li>Use the symmetric key for bulk data encryption/decryption</li>
                  <li>This combines the security of asymmetric with the speed of symmetric encryption</li>
                </ol>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="key-management" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Key Management</CardTitle>
              <CardDescription>Secure generation, storage, and distribution of cryptographic keys</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div>
                  <h3 className="mb-2 text-lg font-medium">Key Lifecycle</h3>
                  <div className="rounded-md bg-muted p-4">
                    <ol className="list-decimal pl-5 text-sm">
                      <li>
                        <strong>Generation:</strong> Creating cryptographically strong keys
                      </li>
                      <li>
                        <strong>Distribution:</strong> Securely sharing keys with authorized parties
                      </li>
                      <li>
                        <strong>Storage:</strong> Protecting keys from unauthorized access
                      </li>
                      <li>
                        <strong>Rotation:</strong> Regularly changing keys to limit exposure
                      </li>
                      <li>
                        <strong>Revocation:</strong> Invalidating compromised keys
                      </li>
                      <li>
                        <strong>Destruction:</strong> Securely removing keys when no longer needed
                      </li>
                    </ol>
                  </div>

                  <h3 className="mb-2 mt-4 text-lg font-medium">Key Storage Solutions</h3>
                  <div className="space-y-2">
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">Hardware Security Modules (HSMs)</h4>
                      <p className="text-sm text-muted-foreground">
                        Physical devices that safeguard and manage digital keys
                      </p>
                    </div>
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">Trusted Platform Modules (TPMs)</h4>
                      <p className="text-sm text-muted-foreground">
                        Secure cryptoprocessors that can securely store keys
                      </p>
                    </div>
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">Key Management Services (KMS)</h4>
                      <p className="text-sm text-muted-foreground">Cloud-based services for key management</p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="mb-2 text-lg font-medium">Common Challenges</h3>
                  <div className="space-y-2">
                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">Key Compromise</h4>
                      <p className="text-sm text-muted-foreground">
                        If a key is stolen, all data encrypted with it is at risk
                      </p>
                      <div className="mt-2 flex justify-end">
                        <Button variant="outline" size="sm">
                          Simulate Key Compromise
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">Lost Keys</h4>
                      <p className="text-sm text-muted-foreground">
                        If a key is lost, encrypted data may become permanently inaccessible
                      </p>
                      <div className="mt-2 flex justify-end">
                        <Button variant="outline" size="sm">
                          Simulate Key Loss
                        </Button>
                      </div>
                    </div>

                    <div className="rounded-md border p-3">
                      <h4 className="font-medium">Key Escrow</h4>
                      <p className="text-sm text-muted-foreground">
                        Storing keys with a trusted third party for recovery purposes
                      </p>
                      <div className="mt-2 flex justify-end">
                        <Button variant="outline" size="sm">
                          Simulate Key Recovery
                        </Button>
                      </div>
                    </div>
                  </div>

                  <h3 className="mb-2 mt-4 text-lg font-medium">Best Practices</h3>
                  <ul className="list-disc pl-5 text-sm">
                    <li>Use strong random number generators for key creation</li>
                    <li>Implement principle of least privilege for key access</li>
                    <li>Separate keys by purpose (signing, encryption, etc.)</li>
                    <li>Regularly rotate keys to limit exposure</li>
                    <li>Maintain secure backup and recovery procedures</li>
                    <li>Audit and log all key operations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </DashboardShell>
  )
}

