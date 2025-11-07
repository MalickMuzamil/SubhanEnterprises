import { Component } from '@angular/core';
import { AboutStory } from "../../Components/About/about-story/about-story";
import { AboutHero } from "../../Components/About/about-hero/about-hero";
import { AboutValues } from "../../Components/About/about-values/about-values";
import { AboutTeams } from "../../Components/About/about-teams/about-teams";
import { AboutAchievement } from "../../Components/About/about-achievement/about-achievement";
import { AboutCta } from "../../Components/About/about-cta/about-cta";

@Component({
  selector: 'app-about',
  imports: [AboutStory, AboutHero, AboutValues, AboutTeams, AboutAchievement, AboutCta],
  templateUrl: './about.html',
  styleUrl: './about.css',
})
export class About {

}
