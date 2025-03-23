import { Component } from '@angular/core';
import { NgClass, NgFor } from '@angular/common';

@Component({
    selector: 'app-geography-card',
    standalone: true,
    imports: [NgClass, NgFor],
    templateUrl: './geography-card.component.html',
    styleUrls: ['./geography-card.component.scss'],
})
export class GeographyCardComponent {
    selectedRegion: string = 'Pacific';
    regionData: any[] = [
      {
      name: 'Pacific',
      info: 'The Pacific region includes states like California, Oregon, and Washington. It is known for its diverse climate, ranging from the rainy coastal areas to the dry inland valleys. The region is also famous for its tech industry, particularly in Silicon Valley.',
      image: 'assets/images/map/Pacific01.png',
      overlayImage: 'assets/images/map/Pacific.png'
      },
      {
      name: 'Mountain',
      info: 'The Mountain region includes states like Colorado, Utah, and Nevada. This region is characterized by its rugged terrain and high elevations. It is a popular destination for outdoor activities such as skiing, hiking, and mountain biking.',
      image: 'assets/images/map/Mountain01.png',
      overlayImage: 'assets/images/map/Mountain.png'
      },
      {
      name: 'Central',
      info: 'The Central region includes states like Texas, Oklahoma, and Kansas. Known for its vast plains and agricultural output, this region is often referred to as the "breadbasket" of the United States. It also has a rich cultural heritage, with influences from Native American, Mexican, and cowboy traditions.',
      image: 'assets/images/map/Central01.png',
      overlayImage: 'assets/images/map/Central.png'
      },
      {
      name: 'Eastern',
      info: 'The Eastern region includes states like New York, Pennsylvania, and Florida. This region is diverse, with bustling metropolitan areas like New York City and Miami, as well as historical sites such as Philadelphia and Washington, D.C. It is also known for its varied climate, from the cold winters in the north to the warm, humid conditions in the south.',
      image: 'assets/images/map/Eastern01.png',
      overlayImage: 'assets/images/map/Eastern.png'
      },
      {
      name: 'Alaska',
      info: 'Alaska is known for its vast wilderness and cold climate. It is the largest state in the U.S. by area and is famous for its stunning natural beauty, including glaciers, mountains, and abundant wildlife. Despite its remote location, Alaska has a rich cultural history and is home to many indigenous communities.',
      image: 'assets/images/map/Alaska01.png',
      overlayImage: 'assets/images/map/Alaska.png'
      },
      {
      name: 'Hawaii',
      info: 'Hawaii is known for its tropical climate and beautiful islands. It is a popular tourist destination, famous for its beaches, volcanoes, and unique cultural heritage. The state is made up of several islands, each with its own distinct character and attractions.',
      image: 'assets/images/map/Hawaii01.png',
      overlayImage: 'assets/images/map/Hawaii.png'
      }
    ];

    selectedRegionData: any = this.regionData.find(region => region.name === 'Pacific');

    selectRegion(regionName: string) {
        this.selectedRegion = regionName;
        const foundRegion = this.regionData.find(region => region.name === regionName);

        if (foundRegion) {
            this.selectedRegionData = foundRegion;
            this.selectedRegionData.overlayImage = foundRegion.overlayImage;
        } else {
            console.error(`Region ${regionName} not found.`); // O manejar el error de otra manera
        }
    }
}