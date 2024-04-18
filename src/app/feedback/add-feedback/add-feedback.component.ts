import { Component } from '@angular/core';
import { FeedbackService } from '../../services/feedback.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Feedback } from '../../model/feedback';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-feedback',
  templateUrl: './add-feedback.component.html',
  styleUrls: ['./add-feedback.component.css']
})
export class AddFeedbackComponent {
  constructor(private service: FeedbackService,private router : Router) {}

  feedback = new FormGroup({
    rating: new FormControl("", [Validators.required]), 
    movieName: new FormControl("", [Validators.required]),
    hashtag: new FormControl("", [Validators.required,Validators.minLength(4)]),
    feedback: new FormControl("", [Validators.required, Validators.minLength(10)])
  });

  setRating(rating: number) {
    this.feedback.patchValue({rating: rating.toString()});
  }

  isRatingFilled(starNumber: number): boolean {
    const ratingValue = this.feedback.get('rating')?.value;
    if (ratingValue === undefined || ratingValue === null) {
      return false;
    }
    return Number(ratingValue) >= starNumber;
  }

  insertFeedbackDetails = () => {
    console.log("in function");
    console.log(this.feedback.value);

    const feed = new Feedback(
      Number(this.feedback.value.rating),
      this.feedback.value.movieName || '',
      this.feedback.value.hashtag || '', 
      this.feedback.value.feedback || ''
    );

    this.service.insertFeedbackDetails(feed).subscribe(
      (response) => {
        console.log("Back to frontend");
        console.log(response);
      },
      (error) => {
        console.log("Back to frontend error");
        console.log(error);
      }
    );

  };
  goToSuccessfulPage(){
    this.router.navigate(['/movie/moviepage/:id']);
  }
  hideForm() {
    // const form = document.querySelector('form');
    // form?.classList.add('hidden');


    this.router.navigate(['/movie/moviepage']);

  }
}