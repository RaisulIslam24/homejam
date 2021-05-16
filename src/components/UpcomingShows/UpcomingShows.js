import React from 'react';
import UpcomingShowDetails from '../UpcomingShowDetails/UpcomingShowDetails';
import './UpcomingShows.css';
const data = [
    {
        name: 'Benny Dayal',
        img: 'https://s3-alpha-sig.figma.com/img/c153/d9e4/575af0a0c47fbc35f8befa545523b022?Expires=1621814400&Signature=RlRsmCCG1f~pzVlDK529r2BkLnq4IK97GXBvBbZQDNOBzJs22Xuhg6kBVPG~3KCiF4bGz~ucTkpC3dXYJP2594Xtl0YNmANxKR8vfZ67mg9mghEW5MaEGKQKgO-w8ihwwHPPaZTUPCbyK1VoFbVn4EOYXMq00BofYLvfFwX9~bUrukAuBvHcCWZDonNeNfvatOyTo-wYmuCXEjIwKk9xp0bw3EGpal77jiNHV9Ol9O6tcyOYauud6pbBfufv2UJONwUFM7sa0Qqig~KupP8lOfc1SjpJO6EEyIYsU2CieAUqLMrbQSQcR8tcbkQtTPaU1V5e03w8DiOxQcrekTnDmQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'Folk'
    },
    {
        name: 'Vijay Yesudas',
        img: 'https://s3-alpha-sig.figma.com/img/00aa/184e/14e65dbe5f4c4ac8365460fb81c2d274?Expires=1621814400&Signature=JFb7gKRPYCze9BQuWxfGitNbTka1rwKweKGtX4lUd~ItMqgKlAjkmBJjkYDhu3fbWUe-oL3EHl9BTzVy39LjRjnNvqFc4JbWGnVPpRAikz~6AmXSwzKut0OsNI6tycWuVqEp2-dTquxcdCNNjNA5scHPjAz49j5eQ26lfX8kH5LRTy3k95ebJxyylSN27k47Xpk~7iQBjSByw23b~UzAJPGEN3oXZ3In51-oroMCRvq9~1feu78~QVx7bjtaEOSGeGAh0pxB0rqSOOVHfqiTGE-PGRZOlCIHiGlQn8-2y1y4zmZ0zuxG61mcp02jBai4xFTnbdK4blEeZVzigIaRxQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'Bollywood'
    },
    {
        name: 'Andrea Jeremiah',
        img: 'https://s3-alpha-sig.figma.com/img/dcc6/2cf7/c3f15ae722813c8d9985de4d6bd6509f?Expires=1621814400&Signature=NOnxs92Z2ltoNlroftgBC6x0UGCV-7IG65EqOOyig6axy8rXmhvI3ypFjrqzmDjuhO1ivbAWa8wS~00hJ~J-k3sVG3jIcRVZjTF~aUphLHyKBVGDHd3IEbfNYhbLEO6~fUbwVqfnK6~cUQ1XfxrKHRIb9O2sdXb~XG9IEKfFYF64vTxbDOp2PYw1MDO8YsVQrm5nsFfNbq4IlsfuxrB5QZKkKgqawWH3XHvkG34z8dm0ZcPlB-eM65ZJENYA9zYnkUvFDfrFlQ8YMPtMY1FYtjXeMAFEMDV2CRnPSo4YjKWvTrjELXys0aB~PBoE8TRqMZY3hQkq2q8IWjfTfncZ1Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'Folk'
    },
    {
        name: 'Shilpa Rao',
        img: 'https://s3-alpha-sig.figma.com/img/64a1/8b66/bd57fcd0d6a0d45a30dc2426856835dd?Expires=1621814400&Signature=cXsDvaeN1dXJZhGnDBwfSSFF2dgGwhyiTSfg4n3C81au6dxvQjqmesjqqn3ZkJiC1YZ8agF-oT5Ap2Uebk2YSOtEHM70xWGl8Pf1-5pfyHcCQdZYMABGT5HJxiQRcoIJ7MCg6TaBQ1Rt2HZ34mXYNFqz2T5A7ZAc52ZQdpxglUf6-LP5lLQRks6zpJO0~x1iMGr7ep3eJ2iRi2C~YlD3gUzwENc~ox64Xv03AaqZ05iyro8z2Vt7mVXK1Kob9qvqPFhmI9tAY2Clj4QHjhsJmDEwOgAMoCLKykVLbbVyY69xZ4m0L173Vu56V82xP~KhnXhnJupmQFotKg2ADSSrGw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA',
        type: 'Folk'
    },
]

const UpcomingShows = () => {
    return (
        <div className="mt-5 pb-5">
            <div className="d-flex justify-content-between">
                <h2 className="text-white">Upcoming Shows</h2>
                <a href="/" style={{color: '#E5C558', textDecoration: "none"}}>View All</a>
            </div>
            <hr className="line"></hr>
            <div className="shows">
                {
                    data.map(data => <UpcomingShowDetails data={data}></UpcomingShowDetails>)
                }
            </div>
        </div>
    );
};

export default UpcomingShows;