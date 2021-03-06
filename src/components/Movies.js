import React from 'react'
import styled from 'styled-components'

function Movies() {
    return (
        <Container>
            <h4>Recommended For You</h4>
            <Content>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7460/627460-h" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3749/643749-h" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/8720/1078720-h-125f68c67f48" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/87/1100087-h-70e9725e4a9b" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/7460/627460-h" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_2_5x/sources/r1/cms/prod/3749/643749-h" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_hcdl/sources/r1/cms/prod/8720/1078720-h-125f68c67f48" alt=""/>
                </Wrap>
                <Wrap>
                    <img src="https://img1.hotstarext.com/image/upload/f_auto,t_web_m_1x/sources/r1/cms/prod/87/1100087-h-70e9725e4a9b" alt=""/>
                </Wrap>
            </Content>
        </Container>
    )
}

export default Movies


const Container = styled.div`

`
const Content = styled.div`
display:grid;
grid-gap:25px;
grid-template-columns: repeat(4, minmax(0, 1fr));
`
const Wrap = styled.div`
border-radius:10px;
cursor:pointer;
overflow:hidden;
border: 3px solid rgba(249, 249, 249, 0.1);
box-shadow:rgb(0 0 0 / 69%) 0px 26px 30px -10px,
rgb(0 0 0 / 73%) 0px 16px 10px -10px;
transition:all 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94) 0s;

img{
    height:100%;
    width:100%;
    object-fit:cover;
}

&:hover{
    transform:scale(1.05);
    border-color: rgba(249, 249, 249, 0.8);
    box-shadow:rgb(0 0 0 / 80%) 0px 40px 58px -16px,
    rgb(0 0 0 / 72%) 0px 30px 22px -10px;
}

`