function isEligible(mathScore , englishScore , scienceScore) {
    let eligibleForAward
    let scholarship = (mathScore > 80 && englishScore > 80) ||
                        (mathScore > 80 && scienceScore > 80) ||
                        (englishScore > 80 && scienceScore > 80);
      
   let sciencefair =(mathScore + englishScore + scienceScore) >=250;
      
      eligibleForAward = scholarship || sciencefair ;
       
    
  return eligibleForAward
    
  }