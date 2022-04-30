import {Component, OnInit} from '@angular/core';
import {CharacterService} from "../../service/character-service";
import {CharacterModel} from "../../model/character.model";

@Component({
  selector: 'app-critrole-search-characters',
  templateUrl: './critrole-search-characters.component.html',
  styleUrls: ['./critrole-search-characters.component.scss']
})
export class CritroleSearchCharactersComponent implements OnInit {
  characters: Array<CharacterModel> = []
  loading = false;
  noResults = false;

  actor: string | undefined = undefined;
  actorList = [undefined, 'Matt', 'Laura', 'Taliesin', 'Ashley', 'Liam', 'Marisha', 'Sam', 'Travis']

  character: string | undefined = undefined;
  characterList = [undefined, 'Matt', 'Laura', 'Taliesin', 'Ashley', 'Liam', 'Marisha', 'Sam', 'Travis']


  constructor(private characterService: CharacterService) {
  }

  ngOnInit(): void {
    this.searchCharacters()
  }

  searchCharacters() {
    this.noResults = false;
    this.loading = true;
    this.characterService.find(this.character, this.actor)
      .then(characters => {
        this.characters = characters !== undefined ? characters[0] : [];
        this.characters?.forEach(character => {
          character.actor_nickname = `${character.actor_nickname.slice(0, 1)}${character.actor_nickname.slice(1).toLowerCase()}`
        });
        if (this.characters?.length == 0) {
          this.noResults = true;
        }

        this.loading = false
      })
      .catch(e => this.loading = false)
  }

}
