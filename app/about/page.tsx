import React from 'react';
import { motion } from 'framer-motion';

interface TeamMember {
    name: string;
    role: string;
    bio: string;
    image: string;
}

const teamMembers: TeamMember[] = [
    {
        name: 'Sophia Turner',
        role: 'Founder & CEO',
        bio: 'With over a decade of experience in the cosmetics industry, Sophia leads luxury LRP cosmetics with a vision of elegance and innovation.',
        image: '/images/sophia.jpg',
    },
    {
        name: 'James Lee',
        role: 'Creative Director',
        bio: 'James brings a wealth of creativity and passion to our product design, ensuring every item reflects the luxury LRP ethos.',
        image: '/images/james.jpg',
    },
    {
        name: 'Emily Chen',
        role: 'Head of Marketing',
        bio: 'Emily’s strategic insights and extensive knowledge of market trends help position luxury LRP cosmetics as a leader in the industry.',
        image: '/images/emily.jpg',
    },
];

const AboutPage: React.FC = () => {
    return (
        <div className="bg-white text-orange-600 p-8 md:p-16">
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
            >
                <h1 className="text-4xl font-bold text-center mb-8">About luxury LRP cosmetics</h1>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our History</h2>
                    <p className="text-lg">
                        Founded in 2020, luxury LRP cosmetics emerged from a passion for high-quality, luxurious beauty products that enhance natural beauty. Our mission is to provide premium cosmetics that combine elegance with performance, empowering individuals to express their unique style.
                    </p>
                </section>
                <section className="mb-12">
                    <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
                    <ul className="list-disc list-inside text-lg">
                        <li>Quality: We commit to using the finest ingredients and materials in all our products.</li>
                        <li>Innovation: Continuously exploring new methods and technologies to elevate beauty standards.</li>
                        <li>Sustainability: Dedicated to environmentally friendly practices in sourcing and packaging.</li>
                        <li>Inclusivity: Embracing diversity and creating products for all skin tones and types.</li>
                    </ul>
                </section>
                <section>
                    <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {teamMembers.map((member, index) => (
                            <motion.div
                                key={index}
                                className="bg-orange-100 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300"
                                whileHover={{ scale: 1.05 }}
                            >
                                <img
                                    src={member.image}
                                    alt={member.name}
                                    className="rounded-full h-32 w-32 mx-auto mb-4"
                                />
                                <h3 className="text-xl font-bold text-center">{member.name}</h3>
                                <p className="text-md font-semibold text-center">{member.role}</p>
                                <p className="text-center text-gray-700">{member.bio}</p>
                            </motion.div>
                        ))}
                    </div>
                </section>
            </motion.div>
        </div>
    );
};

export default AboutPage;