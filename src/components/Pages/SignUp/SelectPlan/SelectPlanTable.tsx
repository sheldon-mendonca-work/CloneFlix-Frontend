import { Table, TableContainer, Tbody, Td, Th, Thead, Tr } from "@chakra-ui/react"
import classes from "./SelectPlanTable.module.css";
import { ComputerIcon, PhoneIcon, TVIcon, TabletIcon } from "../../../Util/svg-icons/svg-icons";
import { useAppDispatch, useAppSelector } from "../../../../store/hookTypes";
import { userActions } from "../../../../store/user/user-slice";

const SelectPlanTable = (): JSX.Element => {

    const currentPlan = useAppSelector((state) => state.user.currentPlan);
    const dispatch = useAppDispatch();

    type planType = {
        name: string,
        price: string, 
        videoQuality: string, 
        resolution: string, 
        devices: string[]
    }

    type netflixPlanType = {
        [key: string] : planType
    }

    const netflixPlans: netflixPlanType = {
        "Mobile": {
            name: "Mobile",
            price: "₹ 149",
            videoQuality: "Good",
            resolution: "480p",
            devices: ["Phone", "Tablet"],
        },
        "Basic": {
            name: "Basic",
            price: "₹ 199",
            videoQuality: "Good",
            resolution: "720p",
            devices: ["Phone", "Tablet"],
        },
        "Standard": {
            name: "Standard",
            price: "₹ 499",
            videoQuality: "Better",
            resolution: "1080p",
            devices: ["Phone", "Tablet", "Computer", "TV"],
        },
        "Premium": {
            name: "Premium",
            price: "₹ 649",
            videoQuality: "Best",
            resolution: "4K + HDR",
            devices: ["Phone", "Tablet", "Computer", "TV"],
        }
    }

    const getDevice = (device: string) : JSX.Element => {
        switch(device){
            case "Phone": 
                return <>
                    <div className={classes.deviceIconDiv}><PhoneIcon className={classes.deviceIcon} /></div>
                    <p>Phone</p>
                </>
            
            case "Tablet": 
                return <>
                    <div className={classes.deviceIconDiv}><TabletIcon className={classes.deviceIcon} /></div>
                    <p>Tablet</p>
                </>

            case "Computer": 
                return <>
                    <div className={classes.deviceIconDiv}><ComputerIcon className={classes.deviceIcon} /></div>
                    <p>Computer</p>
                </>

            case "TV": 
                return <>
                    <div className={classes.deviceIconDiv}><TVIcon className={classes.deviceIcon} /></div>
                    <p>TV</p>
                </>
            
            default: 
                return <></>
        }
    }

    const planUpdateHandler = (plan: string) : void => {
        dispatch(userActions.updateCurrentPlan({currentPlan: plan}))
    }

    return <TableContainer position={'sticky'} top={'0'}>
        <Table>
            <Thead>
                <Tr>
                    <Th></Th>
                    {
                        netflixPlans && Object.keys(netflixPlans).map((item) =>(
                            <Th key={item} onClick={()=>planUpdateHandler(item)} className={currentPlan === item ? classes.activePlan : classes.inActivePlan}>
                                <div className={classes.head}>{item}</div>
                            </Th>
                        ))
                    }
                </Tr>
                </Thead>
                <Tbody>
                <Tr>
                    <Td>Monthly price</Td>
                    {
                        netflixPlans && Object.keys(netflixPlans).map((item) =>(
                            <Td key={item} fontWeight={'501'} onClick={()=>planUpdateHandler(item)} p={'1rem'} textAlign={'center'} className={currentPlan === item ? classes.activePlan : classes.inActivePlan}>
                                <div>{netflixPlans[item].price}</div>
                            </Td>
                        ))
                    }
                </Tr>
                <Tr>
                    <Td>Video quality</Td>
                    {
                        netflixPlans && Object.keys(netflixPlans).map((item) =>(
                            <Td key={item} fontWeight={'501'} onClick={()=>planUpdateHandler(item)} p={'1rem'} textAlign={'center'} className={currentPlan === item ? classes.activePlan : classes.inActivePlan}>
                                <div>{netflixPlans[item].videoQuality}</div>
                            </Td>
                        ))
                    }
                </Tr>
                <Tr>
                    <Td>Resolution</Td>
                    {
                        netflixPlans && Object.keys(netflixPlans).map((item) =>(
                            <Td key={item} fontWeight={'501'} onClick={()=>planUpdateHandler(item)} p={'1rem'} textAlign={'center'} className={currentPlan === item ? classes.activePlan : classes.inActivePlan}>
                                <div>{netflixPlans[item].resolution}</div>
                            </Td>
                        ))
                    }
                </Tr>
                <Tr>
                    <Td>Devices you can use to watch</Td>
                    {
                        netflixPlans && Object.keys(netflixPlans).map((item) =>(
                            <Td key={item} fontWeight={'501'} onClick={()=>planUpdateHandler(item)} p={'1rem'} textAlign={'center'} className={currentPlan === item ? classes.activePlan : classes.inActivePlan}>
                                {netflixPlans[item]?.devices?.map((plan: string) => (
                                    <div key={`${item}_${plan}`} className={classes.deviceItem}>{getDevice(plan)}</div>
                                ))}
                            </Td>
                        ))
                    }
                </Tr>
            </Tbody>
        </Table>
    </TableContainer>
}

export default SelectPlanTable;