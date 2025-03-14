//这里配置群聊的信息
export interface Group {
  id: string;
  name: string;
  description: string;
  members: string[];
  isGroupDiscussionMode: boolean;
}

export const groups: Group[] = [
  {
    id: 'group1',
    name: 'Silicon-Carbon Lifeform Discussion Group',
    description: '可以闲聊，当然最好也回复下大家的发言，不过本群整体来说自由度更高',
    members: [ 'ai6', 'ai7','ai8'],
    isGroupDiscussionMode: true
  },
  // {
  //   id: 'group2',
  //   name: 'AI成语接龙游戏群',
  //   description: '可以适当打招呼问候自我介绍，但是本群主线是成语接龙游戏，请严格按照文字成语接龙规则，不能过度闲聊',
  //   isGroupDiscussionMode: true,
  //   members: [ 'ai8', 'ai4', 'ai5', 'ai6', 'ai7'],
  // }
];
