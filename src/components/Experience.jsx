import { motion, useScroll } from 'framer-motion';
import React, { useRef } from 'react';
import LiIcon from './LiIcon';

const Details = ({ position, company, companyLink, time, adress, work }) => {
	const ref = useRef(null);
	return (
		<li
			ref={ref}
			className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between md:w-[80%] '
		>
			<LiIcon reference={ref} />
			<motion.div
				initial={{ y: 50 }}
				whileInView={{ y: 0 }}
				transition={{ duration: 0.5, type: 'spring' }}
			>
				<h3 className=' capitalize font-bold text-2xl  sm:text-xl xs:text-lg'>
					{position}&nbsp;{' '}
					<a
						href={companyLink}
						target='_blank'
						className=' text-primary capitalize  dark:text-primaryDark '
					>
						{' '}
						{company}{' '}
					</a>
				</h3>
				<span className=' capitalize font-medium text-dark/75  dark:text-light/75 xs:text-sm  '>
					{time} | {adress}
				</span>
				<p className='font-medium w-full  md:text-sm'>{work}</p>
			</motion.div>
		</li>
	);
};

const Experience = () => {
	const ref = useRef(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ['start end', 'center start'],
	});
	return (
		<div className='my-64'>
			<h2 className=' font-bold text-8xl mb-32 w-full text-center  md:text-6xl xs:text-4xl md:mb-16 '>
				Experience
			</h2>

			<div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
				<motion.div
					style={{ scaleY: scrollYProgress }}
					className=' absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light  md:w-[2px] md:left-[30px] xs:left-[20px] '
				/>
				<ul className=' w-full flex flex-col items-start justify-between ml-4 '>
					<Details
						position='Fronted Developer'
						company='DevoCamp'
						companyLink='https://devocamptuc.com'
						time='2023-Present'
						adress='Weehawken, New Jersey'
						work='Worked on a  frontend team responsible for developing web desing and components with NextJs and Tailwind CSS'
					/>
					<Details
						position='FullStack Developer'
						company='Radio Historias Comunes'
						companyLink='https://radiosemilla.com.ar'
						time='2024'
						adress='Mar del Plata, Argentina'
						work='I worked on creating an app to listen to already broadcast radio programs using NextJS, MongoDB and TaildwindCss'
					/>
					<Details
						position='FullStack Developer'
						company='Championship Vinyl'
						companyLink='https://championship-vinyl.vercel.app'
						time='2022-2023'
						adress='Mar del Plata, Argentina'
						work='Worked on a  e-commerce making the frontend and backend  of the web with Firebase and React-JS'
					/>
					<Details
						position='Cadet'
						company='Sistemas Video Comunicación'
						companyLink='https://www.svc.com.ar'
						time='2016-2022'
						adress='Buenos Aires, Argentina'
						work='General administrative tasks, Logistics, Problem resolution, Payment management and Customer Support'
					/>
				</ul>
			</div>
		</div>
	);
};

export default Experience;
