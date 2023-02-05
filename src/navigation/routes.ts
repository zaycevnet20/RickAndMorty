import type { ParamListBase, RouteProp } from '@react-navigation/native'
import { useNavigation as useNativeNavigation } from '@react-navigation/native'
import type { NativeStackNavigationProp } from '@react-navigation/native-stack'

export enum Navigators {
  Main = 'Main',
}

export enum Screens {
  Characters = 'CharactersScreen',
  Locations = 'LocationsScreen',
  Episodes = 'EpisodesScreen',
  CharacterDetail = 'CharacterDetailScreen',
  LocationDetail = 'LocationDetailScreen',
  EpisodeDetail = 'EpisodeDetailScreen',
  FiltersCharacters = 'FiltersCharactersScreen',
  FiltersLocations = 'FiltersLocationsScreen',
  FiltersEpisodes = 'FiltersEpisodesScreen',
}

export enum Stacks {
  Characters = 'CharactersStack',
  Locations = 'LocationsStack',
  Episodes = 'EpisodesStack',
}

type Routes = Navigators | Screens | Stacks

export const useNavigation = () =>
  useNativeNavigation<NativeStackNavigationProp<ParamListBase, Routes>>()

interface WithId {
  id: string
  name: string
}

export type CharacterDetailProp = RouteProp<
  { HomeDescriptionScreen: WithId },
  'HomeDescriptionScreen'
>