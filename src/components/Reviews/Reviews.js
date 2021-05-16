import React from 'react';
import Review from '../Review/Review';
import './Reviews.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
const data = [
    {
        name: 'Hellen Jummy',
        img: 'https://s3-alpha-sig.figma.com/img/bfe5/8b21/510ca86917b9c3ccc0913f92357582be?Expires=1621814400&Signature=Jn~g7TUhHj3MIA13pWn32jdPMONiN5tQghthhCTNd8UQxVHkcCq4QEi-eiLEevA7wf3hqOTrAfwbpd4R9yWIX3he7IiWWIGtSoA1kfBifiJfKWMtXZpr4hRZqvTnPpp6jez9SAUJ8YSf6ZDZi6HmCRyAGy7QGjN7tbRbx3v3aHlotMrN-Pw3KhtTbNF6ADTCY-~Jj7plEyUu1I5fiKtpKEzlA3KnAPuQOaBBlP~VLjJS2G8zkmUS7zpluVnCjFlDZuYV4vc4HiLQ8vAn3CENn7yn8-hCCPxtR7aCLJEc2YEkADD5vsT0BrEBUEdtJqwSGXQ~aA3DiGyW9EDwnrdbgg__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        flag: 'https://image.shutterstock.com/image-illustration/usa-flag-waving-3d-illustration-260nw-1924256330.jpg',
        city: 'PALO ALTO, CA',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae, ratione alias ducimus magni explicabo natus vero unde voluptatibus distinctio quo.'
    },
    {
        name: 'Isaac Oluwatemilorun',
        img: 'https://s3-alpha-sig.figma.com/img/b170/d098/6ffd2bedd0502693c4b159f2edb6f5f3?Expires=1621814400&Signature=Bxa3X1FYKKsys0ewaobCpn9Q37xFfJveOKTTjJva7upyLK8Zd1FGUaX-K9oi1VK6om1-5yoAFtfpcUmSSaIUH0mW~RvOEi~jbYsuhWF-S-pGYsv4KscvPUtqTRCZSK8OLY1G2nDqEwGjlnrCId-uT9uioG9gBYy9dYZ7R8uATVZF1fPzHTeO-doA4jjgAutS36jHPRJTIDGqbGd~ui-BRk1bYL3hapXDapn~oJWsKRHkvcuDp8lJiCSAXFIbX3LS5Jg634Vgib59qnNH0WhopeyEuZ8IklNJ4s8iPoc9nJLlunJOZLiFDr~frquBu4yhdGWBG68x7DaxJmOgA4-hfQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        flag: 'https://www.worldatlas.com/r/w1200/upload/20/07/2a/shutterstock-152854481.jpg',
        city: 'PALO ALTO, CA',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae, ratione alias ducimus magni explicabo natus vero unde voluptatibus distinctio quo.'
    },
    {
        name: 'Hellen Jummy',
        img: 'https://s3-alpha-sig.figma.com/img/0d01/b98c/2977aa404ccb3e9ed56890aa3fee11c9?Expires=1621814400&Signature=LPdJXIClZ9HU2OoZo3wBvp9b0rPJM5RTMLqjp33BX2OmeMOths5-Azw01ZfH9tOWpj6HPoftkO4V4jmq2IP~aO3CzH8uUTj6uRMZC4-KJNQYHfFGHep0FmN8COoHa8~N9hFnx0ApUnX59B4BI~JIJXmADc6Ibo5byLVqRFoE1c3crYXskq12ElueC9ZTYXveObPv0rBg8GnKq2O2e5S1cVvu-VMwSxVJYloGm9AD7XFn5lLkrvPR2JN9nEjZZhWsJLH3THXkw9FZSCHOltk6zT9bHxkBX0heg2iI36nRZvpZhjuVyE9kzIUuOFYxc1dxuoelf7lWPJ8DgdCPLj54ow__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        flag: 'https://image.shutterstock.com/image-illustration/usa-flag-waving-3d-illustration-260nw-1924256330.jpg',
        city: 'PALO ALTO, CA',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea recusandae, ratione alias ducimus magni explicabo natus vero unde voluptatibus distinctio quo.'
    }
]

const Reviews = () => {
    return (
        <div className="mt-5 pb-5">
            <div className="d-flex justify-content-between">
                <h2 className="text-white">Reviews</h2>
                <a href="/" style={{ color: "white", textDecoration: "none" }}>1/12 <FontAwesomeIcon icon={faArrowLeft} className="ms-3" /> <FontAwesomeIcon icon={faArrowRight} className="ms-3" /></a>
            </div>
            <hr className="line"/>
            <div className="reviews">
                {
                    data.map(data => <Review data={data}></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;