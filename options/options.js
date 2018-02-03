function removeSelectedDomains(event)
{
  event.preventDefault();
  for (let option of document.getElementById("matchDomainsBox").options)
  {
    if (option.selected)
      option.remove();
  }
}

document.getElementById('removeMatchDomain').addEventListener('click',
    removeSelectedDomains);
