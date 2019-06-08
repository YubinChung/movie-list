import React from "react";
import styled from 'styled-components';
import LinesEllipsis from 'react-lines-ellipsis';
import {device} from "../../styles/modules/variables";

const Card = props => {
  return (
    <MovieCard className="MovieCard">
      <MoviePoster>
        <PosterImg src={`https://image.tmdb.org/t/p/w300`+props.item.poster_path } alt={props.item.title +`poster image`}></PosterImg>
      </MoviePoster>   
      <MovieContents >
        <Title>{props.item.title}</Title>
        <Synopsis>
          <LinesEllipsis
            text={props.item.overview}
            maxLine='3'
            ellipsis='...'
            trimRight
            basedOn='letters'
            />   
        </Synopsis>
      </MovieContents>
    </MovieCard>
  )
}

const MovieCard = styled.div`
  background-color:#fff;
  display: flex;
  justify-content: space-between;
  align-items:flex-start;
  flex-wrap:wrap;
  flex-flow:row;
  padding:0 20px;
  box-shadow: 0 8px 38px rgba(133, 133, 133, 0.3), 0 5px 12px rgba(133, 133, 133,0.22);
  border-radius: 3px;
  border: 2px solid #eee;
  color: #333;
  margin: 0 1em 50px;
  width: 100%;
  @media (${device.tablet}) {
    width: calc(50% - 6em);
  }
`

const MoviePoster = styled.div`
  width:20%;
  box-sizing:border-box;
  max-width: 100%;
  position: relative;
  top:-20px;
  box-shadow: -10px 19px 38px rgba(83, 83, 83, 0.3), 10px 15px 12px rgba(80,80,80,0.22);
`

const PosterImg = styled.img`
  display:block;
  width:100%;
`
const MovieContents = styled.div`
  padding:20px;
  width:80%;box-sizing:borer-box;
`

const Synopsis = styled.div`
  font-size:14px;
  line-height:20px;
  min-height:60px;
  overflow:hidden;
`

const Title = styled.h1`
  font-size: 18px;
  line-height:30px;
  margin-bottom:20px;
  font-weight:bold;
`
export default Card;