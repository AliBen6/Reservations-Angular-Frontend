import { Component, OnInit } from '@angular/core';
import { Artist } from 'src/app/models/artist/artist.model';
import { ArtistService } from 'src/app/services/artist/artist.service';

@Component({
  selector: 'app-artists-list',
  templateUrl: './artists-list.component.html',
  styleUrls: ['./artists-list.component.css']
})
export class ArtistsListComponent implements OnInit{
  artists?: Artist[];
  currentArtist: Artist = {};
  currentIndex = -1;

  constructor(private artistService: ArtistService) { }

  ngOnInit(): void {
    this.retrieveArtists();
  }

  retrieveArtists(): void {
    this.artistService.getAll('V1/artists')
      .subscribe({
        next: (data) => {
          this.artists = data;
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }

  refreshList(): void {
    this.retrieveArtists();
    this.currentArtist = {};
    this.currentIndex = -1;
  }

  setActiveArtist(artist: Artist, index: number): void {
    this.currentArtist = artist;
    this.currentIndex = index;
  }

}
