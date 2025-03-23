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
      info: 'The Pacific region includes states like California, Oregon, and Washington. It is known for its diverse climate and geography, ranging from coastal beaches to mountain ranges.',
      image: 'assets/images/map/Pacific01.png',
      overlayImage: 'assets/images/map/Pacific.png'
      },
      {
      name: 'Mountain',
      info: 'The Mountain region encompasses states such as Colorado, Utah, and Nevada. This region is characterized by its rugged terrain and significant mountain ranges, including the Rockies.',
      image: 'assets/images/map/Mountain01.png',
      overlayImage: 'assets/images/map/Mountain.png'
      },
      {
      name: 'Central',
      info: 'The Central region includes states like Texas, Oklahoma, and Kansas. It is known for its vast plains and agricultural productivity.',
      image: 'assets/images/map/Central01.png',
      overlayImage: 'assets/images/map/Central.png'
      },
      {
      name: 'Eastern',
      info: 'The Eastern region covers states such as New York, Pennsylvania, and Virginia. It is known for its historical significance and diverse urban and rural landscapes.',
      image: 'assets/images/map/Eastern01.png',
      overlayImage: 'assets/images/map/Eastern.png'
      },
      {
      name: 'Alaska',
      info: 'Alaska is known for its stunning natural beauty, including glaciers, mountains, and abundant wildlife. It is the largest state in the US by area.',
      image: 'assets/images/map/Alaska01.png',
      overlayImage: 'assets/images/map/Alaska.png'
      },
      {
      name: 'Hawaii',
      info: 'Hawaii is an archipelago known for its tropical climate, beautiful beaches, and volcanic landscapes. It is a popular tourist destination.',
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