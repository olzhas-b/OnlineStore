import React, {useEffect, useState} from 'react';
import style from './Sale.module.css'
import axios from '../../../Axios/localhost';
import { Link } from 'react-router-dom';

function Sale() {
    const [data, setData] = useState<any[]>([]);
    useEffect(() => {
        async function fetchData() {
            const result = await axios.get('posts');
            setData(result.data);
        }
        fetchData();
    }, []);
    return (
        <div>
            {
                data.map(item =>
                    <div className={style.sections}>
                        <div className={style.section}>
                            <Link to={`/product/${item.id}`}> <img src={item.image} className={style.image}/></Link>
                            <div className={style.contents}>
                                <h2 className={style.title}>
                                    {item.title}
                                </h2>
                                <p className={style.paragraph}>
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Sale;
