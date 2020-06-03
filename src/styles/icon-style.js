import styled from 'styled-components';
import { Search } from '@styled-icons/feather/Search';
import { Heart } from '@styled-icons/feather/Heart';
import { HeartAdd } from '@styled-icons/remix-fill/HeartAdd';
import { Heart as HeartFilled } from "@styled-icons/remix-fill/Heart";
import { User } from '@styled-icons/feather/User';
import { Location } from '@styled-icons/evil/Location';
import { Home } from '@styled-icons/feather/Home';
import { ToggleLeft } from '@styled-icons/boxicons-regular/ToggleLeft';
import { ToggleRight } from '@styled-icons/boxicons-solid/ToggleRight';
import { PlusCircle } from '@styled-icons/feather/PlusCircle';
import { Edit } from '@styled-icons/feather/Edit';
import { PlayCircle } from '@styled-icons/feather/PlayCircle';
import { LogOut } from '@styled-icons/feather/LogOut';
import { AddAPhoto } from "@styled-icons/material-outlined/AddAPhoto";
import { ChevronLeft } from "@styled-icons/feather/ChevronLeft";
import { CheckCircle } from "@styled-icons/feather/CheckCircle";


export const SearchIcon = styled(Search)`
  color: #61637B;
  width: 2.5em;
`;

export const HomeIcon = styled(Home)`
  color: #61637B;
  width: 2.5em;
`;

export const HeartIcon = styled(Heart)`
  color: #61637B;
  width: 2.5em;
`;

export const UserIcon = styled(User)`
  color: #61637B;
  width: 2.5em;
`;

export const LocationIcon = styled(Location)`
  color: #61637B;
  width: 2.5em;
`;

export const ThemeLightIcon = styled(ToggleLeft)`
  width: 2.5em;
`;

export const ThemeDarkIcon = styled(ToggleRight)`
  width: 2.5em;
`;

export const LogOutIcon = styled(LogOut)`
  position: absolute;
  top: 0;
  width: 1.7em;
  right: 1.5em;
  color: #61637B;
`;

export const EventAddLike = styled(HeartAdd)`
  width: 1.5em;
  color:${ (props) => props.color};
`;

export const EventHeartFilled = styled(HeartFilled)`
  width: 1.5em;
  color:${ (props) => props.color};
`;

export const CameraIcon = styled(AddAPhoto)`
  width: 2em;
`;


export const BackArrow = styled(ChevronLeft)`
  position: absolute;
  top: 0;
  width: 2em;
  color: #61637B;
`;

export const CheckIcon = styled(CheckCircle)`
  position: relative;
  right: 3em;
  float: left;
  bottom: 2em;
  font-size: 1.1em;
  text-align: left;
  width: 1.5em;
  color: ${ (props) => props.color};
`;

export const PlusCircleIcon = styled(PlusCircle)`
position: relative;
  right: 3em;
  float: left;
  bottom: 2em;
  font-size: 1.1em;
  text-align: left;
  width: 1.5em;
  color: ${ (props) => props.color};
`;

export const EditIcon = styled(Edit)`
position: relative;
  right: 3em;
  float: left;
  bottom: 2em;
  font-size: 1.1em;
  text-align: left;
  width: 1.5em;
  color: ${ (props) => props.color};
`;

export const PlayCircleIcon = styled(PlayCircle)`
${'' /* position: relative; */}
  right: 4em;
  float: left;
  bottom: 2em;
  font-size: 1.1em;
  text-align: left;
  width: 1.5em;
  color: ${ (props) => props.color};
`;

