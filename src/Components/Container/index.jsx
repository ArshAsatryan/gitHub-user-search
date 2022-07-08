import React from 'react';
import './index.scss';
import {GoLocation} from "react-icons/go";
import {BsTwitter} from "react-icons/bs";
import {BsBuilding} from "react-icons/bs";
import {GiBreakingChain} from "react-icons/gi";

const UserInfo = ({data, loading, error}) => {
  console.log(data);
  const notAvaible = <span style={{opacity: 0.4}}>Not Avaiable</span>
  return (
    <>
        {data?.login && <div className='container__user'>
                      <div className='container__user--userInfo'>
                          <div className='container__user--avatar'>
                            <img src={data.avatar_url} alt="gitHub avatar"/>
                          </div>
                          <div className='container__user--username'>
                              <h2>{data.login}</h2>
                              <p>{data.name}</p>
                              <p>{data.bio ? data.bio : 'This profile has no bio'}</p>
                          </div>
                          <div className='container__user--joined'>
                             <span>Joined</span>
                             <span>{data.created_at && data.created_at.toString().slice(0, 10)}</span>
                          </div>
                      </div>
                      <div className='container__user--action' >
                          <div>
                            <p>Repos</p>
                            <p>{data.public_repos}</p>
                          </div>
                          <div>
                            <p>Followers</p>
                            <p>{data.followers}</p>
                          </div>
                          <div>
                            <p>Following</p>
                            <p>{data.following}</p>
                          </div>
                      </div>
                      <div className='container__user--address'>
                          <div>
                            <GoLocation />
                             {data.location ? data.location : notAvaible}
                          </div>
                          <div>
                            <BsTwitter />
                            {data.twitter_username ? data.twitter_username : notAvaible}
                          </div>
                          <div>
                            <GiBreakingChain/>
                            {data.blog ? data.blog : notAvaible}
                          </div>
                          <div>
                            <BsBuilding />
                           {data.company ? data.company : notAvaible}
                          </div>
                      </div>
         </div>
        }
              
        {loading && <h1> ...Loading</h1>}
      
        { error && <h1> Ooopss!!! Somthing went wrong</h1>}
  </>
  )
}

export default UserInfo

