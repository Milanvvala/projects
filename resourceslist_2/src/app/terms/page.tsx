'use client'

import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

export default function TermsAndConditionsPage() {
    return (
        <div className="container max-w-3xl mx-auto my-8 px-4">
            <Link
                href="/"
                className="flex items-center gap-2 text-xs mb-4 hover:text-primary transition-colors"
            >
                <ArrowLeft size={12} />
                Back to Home
            </Link>

            {/* Main Terms Card */}
            <div className="bg-white dark:bg-gray-800 rounded-lg shadow border border-gray-200 dark:border-gray-700 p-6">
                <h1 className="text-3xl font-bold mb-6 text-center">
                    Terms and Conditions
                </h1>

                <div className="prose dark:prose-invert max-w-none">
                    <p className="text-center text-gray-600 dark:text-gray-300 mb-8">
                        Last Updated: January 1, 2024
                    </p>

                    <h2>1. Introduction</h2>
                    <p>
                        These Terms govern your use of our website and services. By accessing or using our service, you agree to be bound by these Terms.
                    </p>

                    <h2>2. User Obligations</h2>
                    <p>You agree not to:</p>
                    <ul>
                        <li>Use the service for any unlawful purpose</li>
                        <li>Violate any applicable laws or regulations</li>
                        <li>Infringe upon our intellectual property rights</li>
                        <li>Transmit any harmful or disruptive code</li>
                    </ul>

                    <h2>3. Account Registration</h2>
                    <p>
                        When you create an account, you must provide accurate information. You are responsible for maintaining the confidentiality of your account credentials.
                    </p>

                    <h2>4. Content</h2>
                    <p>
                        All content provided through our service is owned by or licensed to us. You may not reproduce, distribute, or create derivative works without permission.
                    </p>

                    <h2>5. Termination</h2>
                    <p>
                        We may terminate or suspend access to our service immediately, without prior notice, for any breach of these Terms.
                    </p>

                    <h2>6. Disclaimers</h2>
                    <p>
                        The service is provided "as is" without warranties of any kind. We do not guarantee that the service will be uninterrupted or error-free.
                    </p>

                    <h2>7. Limitation of Liability</h2>
                    <p>
                        We shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the service.
                    </p>

                    <h2>8. Changes to Terms</h2>
                    <p>
                        We reserve the right to modify these Terms at any time. Your continued use constitutes acceptance of the modified Terms.
                    </p>

                    <h2>9. Governing Law</h2>
                    <p>
                        These Terms shall be governed by the laws of [Your Country/State] without regard to its conflict of law provisions.
                    </p>

                    <h2>10. Contact Us</h2>
                    <p>
                        For questions about these Terms, please contact us at <span className="text-primary">legal@example.com</span>.
                    </p>

                    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 text-sm text-gray-600 dark:text-gray-400">
                        <p>By using our services, you acknowledge that you have read and understood these Terms and Conditions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}