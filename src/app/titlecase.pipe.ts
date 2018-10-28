import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'titlecase'
})
export class titlecasePipe implements PipeTransform {

     transform(value: string) {
       if(!value){
           return null;
       }

       let words = value.split(' ');
       for (let i = 0; i < words.length; i++) {
           let word = words[i];
           if(i > 0 && this.isPrePosition(word)){
                words[i] = word.toLowerCase();
            } else {
                words[i] = this.toTitleCase(word);
            }
       }
       return words.join(' ');
       }

       private toTitleCase(word: string): string{
           return word.substr(0,1).toUpperCase() + word.substr(1,word.length).toLowerCase();
       }

       private isPrePosition(word: string) : boolean{
        let prepositionArray =  ["a","an","the", "or", "and","aboard", "about", "above", "across", "after",
                                "against", "along", "amid", "among", "anti", "around", "as", "at", "before", 
                                "behind", "below", "beneath", "beside", "besides", "between", "beyond", 
                                "but", "by", "concerning", "considering", "despite", "down", "during", 
                                "except", "excepting", "excluding", "following", "for", "from", "in", 
                                "inside", "into", "like", "minus", "near", "of", "off", "on", "onto",
                                "opposite", "outside", "over", "past", "per", "plus", "regarding",
                                "round", "save", "since", "than", "through", "to", "toward", "towards", 
                                "under", "underneath", "unlike", "until", "up", "upon", "versus", "via",
                                "with", "within", "without"];

        return prepositionArray.indexOf(word.toLowerCase()) > -1;
       }
}