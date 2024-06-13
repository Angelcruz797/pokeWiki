import { number } from 'prop-types';
import { useFetch } from '../../hook/useFetch';
import { Link, Route, Router } from 'react-router-dom';
import { TypeInfo } from './TypeInfo';
import './types.css'

export const Types = () => {

    const {data:{results}, isLoading}= useFetch('type');

    return (
      <>
          <div className='container-types'>
              <h2 className='title-types'>Types</h2>
              {isLoading && <h4>Loading...</h4>}
              
              {!isLoading && results.map((type)=>{
                   const urll =type.url.split('/');
                  return  <Link key={type.name} to={urll[6]}  className='type'>
                              <p>{type.name}</p>
                          </Link>
              })}
          </div>
      </>
    )
}
