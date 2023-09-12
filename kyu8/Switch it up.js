function switchItUp(number){
    switch(number) {
        case 1:
          return 'One';
        break;
        case 2:
          return 'Two';
        break;
        case 3:
          return 'Three';
        break;
        case 4:
          return 'Four';
        break;
        case 5:
          return 'Five';
        break;
        case 6:
          return 'Six';
        break;
        case 7:
          return 'Seven';
        break;
        case 8:
          return 'Eight';
        break;
        case 9:
          return 'Nine';
        break;
        default:
          return 'Zero';
    }
  }

  function switchItUp(number){
    let nums = {0: 'Zero', 1: 'One', 2: 'Two', 3: 'Three', 4: 'Four', 5: 'Five', 6: 'Six', 7: 'Seven', 8: 'Eight', 9: 'Nine'}
    return nums[number]
}