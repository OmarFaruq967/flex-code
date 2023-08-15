import ExploreCard from "./ExploreCard";

const Explore = () => {
    const exploreCards = [
        {
            title: 'React',
            desc: 'A compilation of advanced React concepts.',
            link: 'https://reactskills.com'
        },
        {
            title: 'Data Structures',
            desc: 'A comprehensive guide to various data structures.',
            link: 'https://datastructpro.com'
        },
        {
            title: 'Machine Learning',
            desc: 'Explore machine learning algorithms and applications.',
            link: 'https://ml-explorer.net'
        },
        {
            title: 'Web Development',
            desc: 'A collection of web development projects and resources.',
            link: 'https://webdevhub.io'
        },
        {
            title: 'Java',
            desc: 'Dive into Java programming with hands-on exercises.',
            link: 'https://javamastery.org'
        },
        {
            title: 'Artificial Intelligence',
            desc: 'Learn about AI advancements and ethical considerations.',
            link: 'https://ailearningspace.com'
        },
        {
            title: 'Frontend Frameworks',
            desc: 'Comparative study of popular frontend frameworks.',
            link: 'https://frontendframeworks.net'
        },
        {
            title: 'Cybersecurity Basics',
            desc: 'Understand the fundamentals of cybersecurity.',
            link: 'https://cybersecureyou.org'
        },
        {
            title: 'iOS App Development',
            desc: 'Create engaging apps for the iOS platform.',
            link: 'https://iosprospective.com'
        },
        {
            title: 'Creative Writing',
            desc: 'Unlock your creativity with writing prompts and tips.',
            link: 'https://writecreatively.org'
        }
    ];

    return (
        <div>
            <main className="pt-24 montserrat">

                <h1 className="text-6xl text-white font-bold">Explore</h1>
                <p className="text-xl text-white mt-5 tracking-wider">The best place for problem solving with exploring smart contracts <br /> from world-class companies problems — unlock the power of problem solving with <span className="text-[#00ffc3]">Flex Code</span>.</p>
                <section className="mt-16">
                    <h1 className="text-xl text-white font-semibold">Popular</h1>
                    <p className="text-md text-white mt-1 tracking-wider">A collection of most popular problems.</p>
                    <section className="grid grid-cols-3 gap-5 my-10">
                        {
                            exploreCards?.map((explore, index) => <ExploreCard key={index} explore={explore} />)
                        }
                    </section>
                </section>
            </main>
        </div>
    );
};
export default Explore;