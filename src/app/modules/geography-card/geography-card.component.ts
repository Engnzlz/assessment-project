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
        info: 'Información sobre la región Pacific.',
        image: 'assets/images/map/Pacific01.png',
        overlayImage: 'assets/images/map/Pacific.png'
      },
      {
        name: 'Mountain',
        info: 'Información sobre la región Mountain.',
        image: 'assets/images/map/Mountain01.png',
        overlayImage: 'assets/images/map/Mountain.png'
      },
      {
        name: 'Central',
        info: 'Información sobre la región Central.',
        image: 'assets/images/map/Central01.png',
        overlayImage: 'assets/images/map/Central.png'
      },
      {
        name: 'Eastern',
        info: 'Información sobre la región Eastern.',
        image: 'assets/images/map/Eastern01.png',
        overlayImage: 'assets/images/map/Eastern.png'
      },
      {
        name: 'Alaska',
        info: 'Información sobre la región Alaska.',
        image: 'assets/images/map/Alaska01.png',
        overlayImage: 'assets/images/map/Alaska.png'
      },
      {
        name: 'Hawaii',
        info: 'Información sobre la región Hawaii.',
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