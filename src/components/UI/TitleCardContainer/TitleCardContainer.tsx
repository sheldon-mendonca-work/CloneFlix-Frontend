import { Flex } from '@chakra-ui/react';
import './TitleCardContainer.module.css';
import TitleCardItem from './TitleCardItem';

const TitleCardContainer:React.FC<{}> = (props) => {
    const movieList = [
        {
            id: 1,
            title: 'Pilot',
            content: `Clueless Dunder Mifflin manager Michael Scott welcomes a documentary crew to observe the office just as he learns that his branch could be downsized.`,
            image: 'NetflixImages/Episodes/AAAABf1UZkv-41kJUY1saL1jcK1G1wmtj8_P1W9VfUUXh4TYItI2dRGpnsxu.jpg', 
            time: 230
        },
        {
            id: 2,
            title: 'Diversity Day',
            content: `After receiving complaints about an employee's unsolicited repeat performance of a risqué comedy routine, Michael leads a diversity training session.`,
            image: 'NetflixImages/Episodes/AAAABfRAYd78S64uUmtHkyg9dhVGIU7jNdUoGsrP1i44biNyDepn8dqucwHK.jpg', 
            time: 230000000
        },
        {
            id: 3,
            title: 'Health Care',
            content: `The company is cutting back on health care, which means switching to a plan with fewer benefits. Michael sends Dwight to tell the employees.`,
            image: 'NetflixImages/Episodes/AAAABS5cRxVTk4Zd5Ndgbf2mIlZ2UFNttxTE82uELgbz9PdWBxOz4q3mlhWG.jpg', 
            time: 23000
        },
        {
            id: 4,
            title: 'The Alliance',
            content: `With rumors of downsizing floating around the office, a nervous Dwight approaches Jim about forming an alliance to protect their jobs.`,
            image: 'NetflixImages/Episodes/AAAABf1UZkv-41kJUY1saL1jcK1G1wmtj8_P1W9VfUUXh4TYItI2dRGpnsxu.jpg', 
            time: 230000000
        },
        {
            id: 5,
            title: 'Basketball',
            content: `After planning a basketball game between the office and warehouse workers, Michael picks his "dream team" -- led by the company's sole black employee.`,
            image: 'NetflixImages/Episodes/AAAABTM5n9N1cjgNEu_VlWHHs8KQr9vRFluABNv-AbjI6TF6JKOuZDbft5HY.jpg', 
            time: 230
        },
        {
            id: 6,
            title: 'Hot Girl',
            content: `When an attractive woman shows up on the premises to sell handbags, Michael sees an opportunity for a red-hot office romance.`,
            image: 'NetflixImages/Episodes/AAAABVGArM5rspq5jGKVJ55UoHPMEIIpX7vbz535Ra3NDtcgJx5Ubavwbntj.jpg', 
            time: 230
        },
    ]
    return <Flex w={"100%"} flexDir={'column'}>
        {
            movieList.map(item => (
                <TitleCardItem id={item.id} title={item.title} content={item.content} image={item.image} time={item.time} key={item.id}/>
            ))
        }
    </Flex>
}

export default TitleCardContainer;