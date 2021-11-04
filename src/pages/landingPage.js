import {React, useState, useEffect }from 'react';
import PhiloCarousel from '../componenets/philoSection/PhiloCarousel';
import News from '../componenets/postSection/Posts';
import { CircularProgress } from '@material-ui/core';
import Additional from '../componenets/StaticSection/Static'
import AllProjects from '../componenets/projectSection/allProjects_f';
import { GetData } from "../services/APIengine";

export default function LandingPage() {

  const [data, setData] = useState(null);
  useEffect(() => {
      GetData(`Tehran/Home`).then(res => setData(res))
  }, []); 

    return(
        <>
            { data ? (
              <div>
                <News newsData={data.postSection.posts} />
                <Additional />
                <PhiloCarousel philosData={data.philanthropistSection} />
                <AllProjects projectsData={data.projectSection} />
            </div>
            ) : (
              <CircularProgress style={{marginTop: '10vh'}} />
            )
            }
        </>
    );
}