import Link from 'next/link'
import MaxWidthWrapper from '../MaxWidthWrapper'

export default function Footer() {
    return (
        <footer className='bg-white h-20 relative border-t border-gray-200'>
            <MaxWidthWrapper>
                <div className='h-full flex flex-col md:flex-row md:justify-between justify-center items-center'>
                    <div className='text-center md:text-left pb-2 md:pb-0'>
                        <p className='text-sm text-muted-foreground'>
                            &copy; {new Date().getFullYear()} All rights reserved
                        </p>
                    </div>

                    <div className='flex items-center justify-center'>
                        <div className='flex space-x-8'>
                            <Link
                                href='terms'
                                className='text-sm text-muted-foreground hover:text-primary transition-colors font-semibold'>
                                Terms
                            </Link>
                            <Link
                                href='privacypolicy'
                                className='text-sm text-muted-foreground hover:text-primary transition-colors font-semibold'>
                                Privacy Policy
                            </Link>
                        </div>
                    </div>
                </div>
            </MaxWidthWrapper>
        </footer>
    )
}