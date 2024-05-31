var guest_list = ['Ali', 'aman', 'ayan', 'sana', 'saba'];
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n');
}
var not_present = "aman";
var new_guest = "shehnila";
guest_list[1] = new_guest;
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n');
}
//  console.log(`Mr ${not_present} will not  come for dinner tomorrow`)
guest_list.unshift('shaheen', 'sarfaraz', 'rizwan');
for (var i = 0; i < guest_list.length; i++) {
    console.log('respected sir/madam' + guest_list[i] + ',\we invited you on dinner tomorrow.\nthank tou\n');
}
