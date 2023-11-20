import React from 'react'
import CardHeader from './sections/CardHeader';
import CardTabs from './sections/CardTabs';
import MHidden from '../../components/MHidden';
import CardDesktopContent from './CardDesktopContent';
import CardMobileContent from './CardMobileContent';
import CreateCardDialog from './sections/CreateCardDialog';

function CardsPage() {
  return (
    <div>

      <MHidden width='smUp'>
        <CardMobileContent />
      </MHidden>
      <MHidden width='smDown'>
        <CardDesktopContent />
      </MHidden>
      <CreateCardDialog />
    </div>
  )
}

export default CardsPage;
