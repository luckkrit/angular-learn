import { IconDefinition } from '@fortawesome/free-regular-svg-icons';
import { IconDefinition as IconDefinition2 } from '@fortawesome/free-solid-svg-icons';

export class SideMenu {
  constructor(
    public title,
    public icon: IconDefinition | IconDefinition2,
    public path: string,
    public subs: SideMenu[]
  ) {}
}
