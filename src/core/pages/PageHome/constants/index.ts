import {
  ICAws,
  ICConfluence,
  ICDocker,
  ICExpress,
  ICFirebase,
  ICGithub,
  ICGitlab,
  ICKafka,
  ICKubernetes,
  ICMongodb,
  ICMysql,
  ICNest,
  ICNextjs,
  ICNodejs,
  ICPostgresql,
  ICRabbitmq,
  ICReact,
  ICRedis,
} from '@daffa/assets'

/* eslint-disable operator-linebreak */
export namespace PageHomeConstant {
  /** @description Website is currently under development. Developer are busy for now... */
  export const MAINTENANCE_TEXT =
    'Website is currently under development. Developer are busy for now...'

  /**
   * @description I'm Software Engineer especialy on Javacript Developer with 3 years of experience.
   * Focusing on React Js, Node Js and other framework with Javascript or Typescript.
   */
  export const BIO_DESCRIPTION =
    "I'm Senior Software Engineer especialy on Javacript Developer with 3 years of experience. Focusing on React Js, Node Js and other framework with Javascript or Typescript."

  /** @description Hello, Everyone! */
  export const HELLO_EVERYONE = 'Hello, Everyone!'

  /** @description I'm */
  export const IM = "I'm"

  /** @description Javascript Developer */
  export const OCCUPATION = 'Javascript Developer'

  /** @description /pdf/Resume.pdf */
  export const CV_FILE_PATH = '/pdf/Resume.pdf'

  /** @description Resume_Daffa.pdf */
  export const CV_FILE_NAME = 'Resume_Daffa.pdf'

  /**
    @description [ICNodejs, ICReact, ICExpress, ICNest, ICNextjs, ICMysql, ICPostgresql, ICMongodb,
    ICDocker, ICKubernetes, ICAws, ICFirebase, ICConfluence, ICRedis, ICRabbitmq, ICKafka, ICGithub,
    ICGitlab]
   */
  export const SERVICE_LOGOS = [
    // Programming
    ICNodejs,
    ICReact,
    // Framework
    ICExpress,
    ICNest,
    ICNextjs,
    // Database
    ICMysql,
    ICPostgresql,
    ICMongodb,
    // Server
    ICDocker,
    ICKubernetes,
    ICAws,
    ICFirebase,
    // Documentation
    ICConfluence,
    // Cache
    ICRedis,
    // Message Broker
    ICRabbitmq,
    ICKafka,
    // Versioning Control
    ICGithub,
    ICGitlab,
  ]

  /** @description About */
  export const ABOUT = 'About'

  /** @description Services */
  export const SERVICES = 'Services'
}
