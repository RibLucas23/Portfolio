import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
	return (
		<footer className='w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light sm:text-base'>
			<Layout classname='py-8 flex items-center justify-between  lg:flex-col lg:py-6'>
				<span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
				<div className='flex items-center lg:py-2'>
					Build by&nbsp;
					<Link
						href='https://www.linkedin.com/in/lucas-ribeiro-da-silva-it/'
						className='underline underline-offset-2'
						target={'_blank'}
					>
						Lucas Ribeiro da Silva
					</Link>
				</div>
				<Link
					href='mailto:rds.lucas23@gmail.com'
					target={'_blank'}
					className='underline underline-offset-2'
				>
					Say hello
				</Link>
			</Layout>
		</footer>
	);
};

export default Footer;
