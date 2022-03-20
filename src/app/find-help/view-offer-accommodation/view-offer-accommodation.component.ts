import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccommodationsResourceService } from '@app/core/api';
import { AccommodationOffer } from '@app/core/api';
import { CategoryRoutingName } from '@app/shared/models';
import { defaults } from '@app/shared/utils';
import { Location } from '@angular/common';
// TODO BE adding phoneNumber inprogress
interface AccommodationOfferPhone extends AccommodationOffer {
  phoneNumber?: string;
}

@Component({
  selector: 'app-view-offer-accommodation',
  templateUrl: './view-offer-accommodation.component.html',
  styleUrls: ['./view-offer-accommodation.component.scss'],
})
export class ViewOfferAccommodationComponent implements OnInit {
  offerId!: number;
  data = defaults<AccommodationOfferPhone>();
  categoryRouteName = CategoryRoutingName.ACCOMMODATION;
  centered = false;
  disabled = false;
  unbounded = false;
  radius!: number;
  color!: string;
  constructor(
    private route: ActivatedRoute,
    private accommodationsResourceService: AccommodationsResourceService,
    private router: Router,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.offerId = Number(this.route.snapshot.paramMap.get('id'));
    this.getAccomodationOffer();
  }

  copyUrl() {
    navigator.clipboard
      .writeText(this.router.url)
      .then()
      .catch((e) => console.error(e));
  }

  navigateBack(): void {
    this.location.back();
  }

  getAccomodationOffer() {
    this.accommodationsResourceService.getAccommodations(this.offerId).subscribe((response) => {
      this.data = response;
    });
  }
}
