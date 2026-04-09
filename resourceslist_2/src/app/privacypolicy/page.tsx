'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function PrivacyPolicyPage() {
    return (
        <div className="container max-w-3xl mx-auto my-8 px-4">
            <Link
                href="/"
                className="flex items-center gap-2 text-xs mb-4 hover:text-primary transition-colors"
            >
                <ArrowLeft size={12} />
                Back to Home
            </Link>

            {/* Main Privacy Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Privacy Policy
                </h1>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                        Effective Date: January 1, 2024
                    </p>

                    <h2>1. Information We Collect</h2>
                    <p>
                        We collect information that you provide directly, including:
                    </p>
                    <ul>
                        <li>Contact details (name, email, phone)</li>
                        <li>Account credentials</li>
                        <li>Payment information</li>
                        <li>Communications with us</li>
                    </ul>

                    <h2>2. How We Use Information</h2>
                    <p>We use your information to:</p>
                    <ul>
                        <li>Provide and maintain our services</li>
                        <li>Process transactions</li>
                        <li>Respond to inquiries</li>
                        <li>Improve our products</li>
                        <li>Send important notices</li>
                    </ul>

                    <h2>3. Data Sharing</h2>
                    <p>
                        We may share information with:
                    </p>
                    <ul>
                        <li>Service providers who assist our operations</li>
                        <li>Legal authorities when required by law</li>
                        <li>Business partners in connection with services</li>
                    </ul>
                    <p>
                        We never sell your personal information to third parties.
                    </p>

                    <h2>4. Data Security</h2>
                    <p>
                        We implement appropriate security measures to protect your information. However, no electronic transmission is completely secure.
                    </p>

                    <h2>5. Your Rights</h2>
                    <p>You may:</p>
                    <ul>
                        <li>Access and request copies of your data</li>
                        <li>Request correction of inaccurate information</li>
                        <li>Request deletion of your data</li>
                        <li>Opt-out of marketing communications</li>
                    </ul>

                    <h2>6. Cookies and Tracking</h2>
                    <p>
                        We use cookies and similar technologies to analyze trends and improve user experience. You can control cookies through your browser settings.
                    </p>

                    <h2>7. Children's Privacy</h2>
                    <p>
                        Our services are not directed to children under 13. We do not knowingly collect information from children.
                    </p>

                    <h2>8. Changes to This Policy</h2>
                    <p>
                        We may update this policy periodically. We will notify you of significant changes through our website or email.
                    </p>

                    <h2>9. Contact Us</h2>
                    <p>
                        For privacy-related inquiries, please contact us at <span className="text-primary">privacy@example.com</span>.
                    </p>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                        <p>By using our services, you acknowledge you have read and understood this Privacy Policy.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}