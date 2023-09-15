import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import useAllProblems from '../../../../Hooks/useAllProblems';

const ProblemsCard = () => {
	const { problemLength } = useAllProblems()

	return (
		<div className="flexcode-banner-bg relative flex flex-row items-center justify-between border border-slate-500 hover:border-[#0fcda18c] px-5 py-6 rounded-xl group cursor-pointer">
			<div className="relative">
				<h4 className="text-5xl font-bold">
					{problemLength || 0}
					<span className="group-hover:text-[#0fcda1] duration-300">
						&#43;
					</span>
				</h4>
				<p className="text-sm font-medium text-slate-400 mt-1">
					Total Problems
				</p>
				<p className="flex items-center gap-1 mt-5 text-sm font-medium primary-color">
					0.78%
					<FaArrowUp />
				</p>
			</div>
			<svg className="h-28 md:h-32 w-auto md:mr-5 fill-[#ffffff56] group-hover:fill-[#0fcda1b1]" viewBox="0 0 682.8 690.5">
				<path d="M167.9,47.1c-6.1-0.1-10,6-7.3,11.6c1.3,2.7,3,5.3,4.5,7.9c8.9,15.5,17.9,31,26.9,46.5c2.5,4.4,7.1,5.7,11.1,3.6
	c4-2.2,5.6-7,3.2-11.2c-10.4-18.2-20.9-36.3-31.4-54.4C173.3,48.4,171,47.1,167.9,47.1z"/>
				<path d="M103.8,217.3c3.7-0.1,6.7-2.3,7.7-6c1-3.6-0.3-7.1-4-9.2c-17.7-10.3-35.5-20.6-53.3-30.8c-4.8-2.8-9.4-1.7-11.9,2.5
	c-2.4,4-0.9,8.9,3.8,11.6c17.6,10.2,35.1,20.3,52.7,30.4C100.4,216.7,102,217.3,103.8,217.3z"/>
				<path d="M276.2,690.5c-4.3-2.7-5.3-6.8-5.2-11.7c0.3-9.6,0-19.3,0.1-28.9c0.1-2.7-0.8-3.5-3.4-3.2c-2.6,0.2-5.2,0.1-7.7,0
	c-5.5-0.2-8.7-3.4-8.7-8.9c0-12.3,0-24.7,0-37c0-1.6-0.2-2.8-1.6-3.9c-7.4-5.9-10.6-13.7-10.6-23.1c0.1-26.9,0-53.8,0.1-80.7
	c0-2.5-0.8-3.9-2.9-5.3c-50.2-31.8-81.6-77-89.9-135.7c-10.8-76.1,15.7-138.5,76.7-185.3c35.3-27.1,76.1-38.8,120.5-37.7
	c8.9,0.2,17.8,1.1,26.6,2.7c4.3,0.8,6.9,3.6,6.9,8c0.1,16.4,0.1,32.9,0,49.3c0,5.9-4.6,9.2-10.6,8c-8.7-1.9-16.4-6.2-24.2-10.1
	c-6.9-3.5-13.4-1.8-18,4.3c-6.8,9.1-1.4,22.4,9.8,24.3c3.8,0.7,6.9-1.1,10-2.7c6.7-3.4,13.4-6.6,20.6-8.8c7.7-2.4,12.8,2,12.6,9.5
	c-0.4,18.1-0.1,36.2-0.1,54.3c0,9,4.4,13.4,13.4,13.4c18.3,0,36.6,0,55,0c7.3,0,10.7,4.4,9,11.4c-1.9,8.3-6,15.7-9.8,23.3
	c-4.3,8.6-0.3,17.8,8.9,20.6c9.3,2.8,19.1-3.9,19.7-13.6c0.2-2.7-1.2-5-2.3-7.3c-3.8-7.6-8-15.1-9.8-23.6
	c-1.3-6.2,2.1-10.8,8.5-10.8c16.6,0,33.1,0,49.7,0c5.2,0,8,2.6,8.9,8c6.4,37.9,2.3,74.6-12.9,109.9c-16.2,37.5-41.8,67.1-76.5,88.6
	c-2.3,1.4-3.1,2.9-3.1,5.6c0.1,26.2,0,52.4,0.1,78.6c0.1,10.2-2.7,19-11.1,25.4c-1.4,1.1-1.2,2.4-1.2,3.8c0,11.9,0,23.7,0,35.6
	c0,7.3-2.9,10.2-10.2,10.2c-3,0-7.1-1-8.9,0.5c-2.1,1.8-0.6,6-0.7,9.1c-0.1,7.6-0.3,15.3,0.1,22.9c0.2,4.8-1,8.6-5.2,11.3
	C357.9,690.5,317.1,690.5,276.2,690.5z M360.8,178c0-10.2,0-19.7,0-29.2c0-1.6-0.5-2.2-2.2-2.3c-5.5-0.3-11-1.1-16.5-1.2
	c-40.1-0.8-76.5,10.6-109.1,34.1c-63.8,45.9-89.7,130.9-62,204.5c15,40,41,71,78,92.5c4.6,2.7,6.6,6,6.5,11.3
	c-0.2,28.7-0.1,57.3-0.1,86c0,8.5,4.3,12.7,12.8,12.7c23.8,0,47.7,0,71.5,0c22.5,0,45.1,0,67.6,0c4,0,7.3-1.1,9.9-4.3
	c2.2-2.8,2.4-6,2.4-9.3c0-28.7,0.1-57.3-0.1-86c0-4.6,1.7-7.6,5.7-9.9c43.6-25.6,71.9-63,84.5-112c5.5-21.4,6.4-43.1,3.7-65
	c-0.2-1.3-0.2-2.5-2.1-2.5c-10.2,0.1-20.4,0-31.2,0c2.2,4.5,4.3,8.5,6.2,12.5c2.1,4.4,3.5,8.9,3.2,13.9
	c-0.9,12.9-10.1,24.5-22.5,28.2c-12.6,3.7-26.6-0.6-34.3-11.1c-7-9.6-8.9-19.9-3.4-31.1c2-4,4.5-7.9,5.9-12.4c-16,0-31.6,0.1-47.2,0
	c-13.5-0.1-24.7-9.9-27-23.2c-0.4-2.7-0.4-5.4-0.4-8.1c0-14.3,0-28.6,0-43.5c-3.5,1.8-6.7,3.3-9.7,5c-7,3.8-14.4,5.8-22.3,3.5
	c-12.2-3.5-20.2-11.4-22.9-23.8c-2.8-12.7,1-23.6,11.2-31.7c10.1-8,21.2-9.4,32.9-3C353.3,174.4,356.7,176,360.8,178z M337.4,630.4
	c22.3,0,44.6,0,66.9,0c2.3,0,3.3-0.5,3.2-3c-0.2-7.3-0.2-14.6,0-21.8c0.1-2.5-1-2.9-3.1-2.9c-44.5,0.1-89,0.1-133.5,0
	c-2.9,0-3.5,1-3.4,3.6c0.2,6.8,0.2,13.6,0,20.4c-0.1,2.8,0.6,3.8,3.6,3.7C293.2,630.4,315.3,630.4,337.4,630.4z M337.3,674.3
	c15.7,0,31.5,0,47.2,0.1c2.4,0,3.2-0.5,3.2-3c-0.2-7.3-0.1-14.6,0-21.8c0-2.1-0.4-2.8-2.7-2.8c-31.7,0.1-63.4,0.1-95.1,0
	c-2.3,0-2.7,0.8-2.6,2.8c0.1,7,0.2,14.1,0,21.1c-0.1,2.8,0.5,3.8,3.6,3.7C306.4,674.2,321.8,674.3,337.3,674.3z"/>
				<path d="M682.8,103.6c-1.3,0.6-1.1,2-1.4,3c-3.6,11.5-14.7,23.6-32.3,21.4c-2.9-0.4-5.9-0.3-8.8-0.7c-2.7-0.4-3,0.3-2,2.7
	c5.4,13,10.7,26,16.1,39c6.7,16.3,0.5,31.6-15.8,38.4c-13.7,5.7-27.5,11.4-41.3,17c-0.1,0-0.1,0.2-0.4,0.5c2.3,2.9,5.3,5.1,8.1,7.3
	c9.9,7.9,13.6,18.1,10.8,30.3c-2.9,12.5-10.9,20.5-23.3,23.8c-19.4,5.2-41.3-10.7-38.3-32.5c0.4-3,0.4-6.1,0.8-9.1
	c0.4-2.8-0.5-2.9-2.7-1.9c-12.9,5.4-25.8,10.5-38.7,15.9c-16.5,6.9-31.8,0.9-38.7-15.6c-5.4-13-10.8-26-16-39
	c-1.2-3.1-2.1-2.9-3.9-0.6c-2,2.6-4.4,4.9-6.4,7.5c-12.1,15.2-37.1,12.8-48.2-3.7c-10.8-16-5.1-37.6,12.2-46.3
	c5.6-2.8,11.6-2.6,17.6-2.2c3.3,0.2,6.5,0.5,10.4,0.8c-2.7-6.6-5.2-12.7-7.7-18.8c-3.4-8.2-6.8-16.5-10.1-24.7
	c-5.8-14.6,0.9-30.4,15.4-36.4c42.3-17.3,84.5-34.7,126.8-52c15.9-6.5,31.2-0.1,37.8,15.8c5.4,12.9,10.6,25.8,15.9,38.7
	c0.4,1.1,0.9,2.1,1.6,3.6c2.9-3.4,5.7-6.4,8.3-9.5c8-9.6,18.2-12.6,30-9.8c11.9,2.9,19.5,10.6,23.1,22.4c0.3,0.9-0.1,2.2,1.1,2.7
	C682.8,95.6,682.8,99.6,682.8,103.6z M425.7,174.8c-5.6-0.6-9.5,2.2-12.2,6.7c-3.2,5.3-3,10.7,0,16c4.2,7.4,16.8,10.9,23.5,2.2
	c5.1-6.7,10.7-13.1,17.7-18c6-4.3,11.2-2.9,14,3.9c7.1,17.2,14.2,34.4,21.3,51.6c3.1,7.4,8.8,9.8,16.2,6.8c17.1-7,34.2-14,51.4-21
	c7.4-3,12-0.1,13.2,7.7c1.3,8.5,0.2,16.9-0.5,25.3c-0.2,2.8,0,5.4,1.5,7.8c3.5,5.6,10.7,8.4,17.2,6.7c6.1-1.6,10.8-7.4,11.3-13.8
	c0.4-4.8-1.5-8.4-5.1-11.3c-6.4-5.3-12.8-10.7-17.8-17.4c-4.7-6.4-3.2-11.7,4.1-14.7c17.1-7,34.2-14,51.3-21.1c7-2.9,9.6-9,6.7-16.1
	c-7-17-13.9-34-20.9-51.1c-3.3-8-0.2-12.8,8.5-13.7c7.8-0.8,15.5-0.4,23.2,0.6c6.4,0.8,11-1.6,14.1-7c3.2-5.8,2.7-11.4-1.1-16.8
	c-4.5-6.5-16.2-9.2-22.5-1.2c-5.2,6.7-10.7,13.1-17.7,18.1c-6.4,4.6-11.5,3.1-14.5-4c-7-16.9-13.9-33.8-20.8-50.7
	c-3.3-8.1-9.2-10.5-17.2-7.2c-20.5,8.4-40.9,16.8-61.4,25.2c-21,8.6-42.1,17.2-63.1,25.8c-8.9,3.7-11.2,9-7.6,17.9
	c1.1,2.7,2.2,5.4,3.3,8.1c5.8,14.1,11.6,28.1,17.4,42.2c2.9,7,0.2,11.7-7.3,13c-1.3,0.2-2.6,0.2-3.9,0.3
	C440.7,176.1,433.2,175.5,425.7,174.8z"/>
				<path d="M334.7,0c4.4,2.7,5.4,6.6,5.3,11.6c-0.2,19.6-0.1,39.2-0.1,58.7c0,6-4.9,10-10.2,8.4c-3.2-0.9-5.3-3-5.8-6.4
	c-0.2-1.6-0.3-3.3-0.3-4.9c0-18.6,0.1-37.3-0.1-55.9c0-5,1.1-8.9,5.5-11.5C330.9,0,332.8,0,334.7,0z"/>
				<path d="M0,340.3c2.7-4.1,6.4-5.2,11.2-5.2c19.7,0.2,39.4,0.1,59.1,0.1c3.7,0,6.4,1.4,7.9,4.7c1.4,3,0.9,6-1.2,8.5
	c-1.7,2-3.9,3-6.5,3c-20.8,0-41.5,0-62.3,0c-4,0-6.3-2.5-8.3-5.5C0,344.1,0,342.2,0,340.3z"/>
				<path d="M167.9,47c3.1,0,5.4,1.3,6.9,4c10.5,18.1,21,36.2,31.4,54.4c2.4,4.2,0.8,9-3.2,11.2c-4,2.1-8.6,0.8-11.1-3.6
	c-9-15.5-17.9-31-26.9-46.5c-1.5-2.6-3.2-5.2-4.5-7.9C157.9,53.1,161.9,47,167.9,47z"/>
				<path d="M103.8,217.3c-1.8,0-3.4-0.6-5-1.5c-17.6-10.2-35.1-20.3-52.7-30.4c-4.7-2.7-6.2-7.6-3.8-11.6c2.5-4.2,7.1-5.2,11.9-2.5
	c17.8,10.2,35.5,20.5,53.3,30.8c3.7,2.1,5.1,5.6,4,9.2C110.5,214.9,107.5,217.2,103.8,217.3z"/>
			</svg>
		</div>
	);
};

export default ProblemsCard;