import React from 'react';
import Head from 'next/head';
import AnimatedText from '@/components/AnimatedText';
import Layout from '@/components/Layout';
import Link from 'next/link';
import Image from 'next/image';
import { GithubIcon } from '@/components/Icons';
import championShipVinylImg from "../../public/images/projects/championShip_vinyl.png"
import coderProyectFront from '../../public/images/projects/CoderProyectFront.png'
import CoderProyectBack from '../../public/images/projects/CoderProyectBack.png'
import pizzaProyect from '../../public/images/projects/NicastroPizza.png'
import HCProyect from '../../public/images/projects/HC.png'
import { motion } from 'framer-motion';
import TransitionEffect from '@/components/TransitionEffect';
const FramerImage = motion(Image)

const FeaturedProject = ({ type, title, summary, img, link, github }) => {

	return (
		<article className=' w-full flex items-center justify-between rounded-3xl border border-solid border-dark bg-light shadow-2xl p-12 relative  rounded-br-2xl
		dark:border-light dark:bg-dark  lg:flex-col lg:p-8 xs:rounded-2xl  xs:rounded-br-3xl  xs:p-4 xs:w-[90vw]
		'>
			<div className='absolute top-0 -right-3 -z-10 w-[100.80%] h-[103%] rounded-[2.5rem] bg-dark  rounded-br-3xl
			dark:bg-light xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]
			'/>

			<Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full ' >
				<FramerImage src={img} alt={title} className='w-full h-auto'
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					priority
					sizes='(max-width: 768px) 100vw,
						(max-width: 1200px) 50vw,
						50vw'

				/>
			</Link>

			<div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 '>
				<span className=' text-primary font-medium text-xl dark:text-primaryDark  xs:text-base '>{type}</span>
				<Link href={link} target='_blank' className='hover:underline underline-offset-2 ' >
					<h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
				</Link>
				<p className='my-2 font-medium text-dark dark:text-light sm:text-sm' > {summary} </p>
				<div className=' mt-2 flex items-center '>
					<Link href={github} target='_blank' className=' w-10 ' >
						<GithubIcon className="dark:text-light " />
					</Link>
					<Link href={link} target='_blank' className=' ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark  sm:px-4 sm:text-base' >
						Visit Project
					</Link>
				</div>
			</div>
		</article>
	)
}
const Project = ({ title, type, img, link, github }) => {

	return (
		<article className=' w-full flex flex-col  items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative dark:border-light dark:bg-dark  xs:p-4 xs:w-[90vw]'>
			<div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark  rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]  ' />

			<Link href={link} target='_blank' className='w-full cursor-pointer overflow-hidden rounded-lg ' >
				<FramerImage src={img} alt={title} className='w-full h-auto'
					whileHover={{ scale: 1.05 }}
					transition={{ duration: 0.2 }}
					priority
					sizes='(max-width: 768px) 100vw,
						(max-width: 1200px) 50vw,
						50vw'

				/>
			</Link>

			<div className='w-full flex flex-col items-start justify-between  mt-4 '>
				<span className=' text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base  '>{type}</span>
				<Link href={link} target='_blank' className='hover:underline underline-offset-2 ' >
					<h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm '>{title}</h2>
				</Link>
				<div className='w-full mt-2 flex items-center justify-between '>
					<Link href={link} target='_blank' className='  text-lg font-semibold  underline dark:text-light md:text-base ' >
						Visit
					</Link>
					<Link href={github} target='_blank' className=' w-8 dark:text-light  md:w-6  ' >
						<GithubIcon />
					</Link>
				</div>
			</div>
		</article>
	)
}

const Projects = () => {
	return (
		<>
			<Head>
				<title>Lucas Ribeiro | Projects</title>
				<meta
					name='description'
					content='Lucas Ribeiro Portfolio | Projects Page'
				/>
			</Head>
			<TransitionEffect />

			<main className='w-full mb-16 flex flex-col items-center justify-center  '>
				<Layout classname='pt-16 xs:!p-4'>
					<AnimatedText text='Imagination and Knowledge!' classname=' mb-16 lg:text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl  ' />

					<div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:!gap-x-8 md:!gap-y-24 sm:!gap-x-0 ' >
						<div className='col-span-12'>
							<FeaturedProject
								title="Nicastro Pizza"
								summary="Built with the MERN stack, this pizza ecommerce app simplifies online ordering. Users can effortlessly browse and customize their orders, enjoying seamless delivery to their doorstep."
								link="https://pizza-project-tawny.vercel.app"
								type="Featured Project"
								github="https://github.com/RibLucas23/PizzaProject"
								img={pizzaProyect}
							/>
						</div>

						<div className='col-span-6 sm:col-span-12'>
							<Project
								title="Coder Proyect Frontend"
								link="https://github.com/RibLucas23/backendFinal-Front"
								type="Featured Project"
								github="https://github.com/RibLucas23/backendFinal-Front"
								img={coderProyectFront}
							/>
						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project
								title="Coder Proyect Backend"
								link="https://github.com/RibLucas23/backendFinal"
								type="Featured Project"
								github="https://github.com/RibLucas23/backendFinal"
								img={CoderProyectBack}
							/>
						</div>
						<div className='col-span-12'>
							<FeaturedProject
								title="Championship Vinyl"
								summary="A feature-rich Vinyl Ecommerce App using React, CSS, Context API, React Router and Firebase. 
							It was inspired by the movie High Fidelity since we are lovers of cinema and music. "
								link="https://championship-vinyl.vercel.app"
								type="Featured Project"
								github="https://github.com/RibLucas23/Championship-Vinyl"
								img={championShipVinylImg}
							/>
						</div>
						<div className='col-span-6 sm:col-span-12'>
							<Project
								title="Historias Comunes"
								link="https://historias-comunes.vercel.app"
								type="Featured Project"
								github="https://github.com/RibLucas23/historiasComunes"
								img={HCProyect}
							/>
						</div>
					</div>
				</Layout>
			</main>
		</>
	);
};

export default Projects;
