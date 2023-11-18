import React from 'react'
import HomeBannerComponent from '../Components/HomeBannerComponent'
import HomeHighLightsComponent from '../Components/HomeHighLightsComponent'
import HomeFaqComponent from '../Components/HomeFaqComponent'
import '../Assets/css/home.scss'

export default function HomePage() {
   return HomePageNotLoginComponent()
}

function HomePageNotLoginComponent(){
    return (
        <>
            <HomeBannerComponent />
            <HomeHighLightsComponent />
            <HomeFaqComponent />
        </>
    )
}
