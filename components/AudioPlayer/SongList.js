import React from 'react';
import { object, arrayOf, func, number } from 'prop-types';
import styled from '~/styles';

import { formatSongLength } from './helpers';

const SongListHolder = styled.div`
  flex: 3;
`;

const SongTable = styled.table`
  width: 100%;
  color: ${props => props.theme.colors.darkLight};
  margin-bottom: 30px;
  table-layout: fixed;
`;

const TableBody = styled.tbody``;

const SongTableRow = styled.tr`
  color: ${props =>
    props.isActive
      ? props.theme.colors.primaryDark
      : props.theme.colors.darkLight};
  cursor: pointer;

  &:hover {
    opacity: 0.7;
  }
`;

const SongTitleCell = styled.td``;

const SongLengthCell = styled.td`
  width: 20%;
  text-align: right;
  vertical-align: top;
`;

const SongList = ({ currentTrack, songList, handleSongClick }) => {
  return (
    <SongListHolder>
      <SongTable>
        <TableBody>
          {songList.map((track, index) => {
            const isActive = index === currentTrack;
            return (
              <SongTableRow
                key={track.title}
                isActive={isActive}
                onClick={() => handleSongClick(index)}
              >
                <SongTitleCell>
                  {index + 1}. {track.title}
                </SongTitleCell>
                <SongLengthCell>
                  {formatSongLength(track.duration)}
                </SongLengthCell>
              </SongTableRow>
            );
          })}
        </TableBody>
      </SongTable>
    </SongListHolder>
  );
};

SongList.propTypes = {
  songList: arrayOf(object).isRequired,
  currentTrack: number.isRequired,
  handleSongClick: func.isRequired,
};

export default SongList;
